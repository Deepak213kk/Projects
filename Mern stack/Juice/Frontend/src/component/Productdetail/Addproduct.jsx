import { useState, useRef } from "react";
import { Plus, X, UploadCloud, Loader2, CheckCircle2, AlertCircle, Droplet } from "lucide-react";
import "./Addproduct.css";
const CATEGORIES = [
  "Fresh Juice",
  "Detox",
  "Diabetes Friendly",
  "Immunity Boost",
  "Weight Loss",
  "Kids Special",
];

const API_URL = "http://localhost:5000/api/products";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: CATEGORIES[0],
  });

  const [nutrition, setNutrition] = useState({
    calories: "",
    sugar: "",
    vitaminC: "",
    carbs: "",
  });

  const [ingredients, setIngredients] = useState([""]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef(null);

  const handleFieldChange = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleNutritionChange = (key) => (e) =>
    setNutrition((n) => ({ ...n, [key]: e.target.value }));

  const handleIngredientChange = (index, value) => {
    setIngredients((prev) => prev.map((it, i) => (i === index ? value : it)));
  };

  const addIngredientField = () => setIngredients((prev) => [...prev, ""]);

  const removeIngredientField = (index) =>
    setIngredients((prev) =>
      prev.length === 1 ? prev : prev.filter((_, i) => i !== index)
    );

  const handleImageSelect = (file) => {
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleImageSelect(file);
  };

  const resetForm = () => {
    setForm({ name: "", price: "", description: "", category: CATEGORIES[0] });
    setNutrition({ calories: "", sugar: "", vitaminC: "", carbs: "" });
    setIngredients([""]);
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("price", form.price);
      data.append("description", form.description);
      data.append("category", form.category);

      ingredients
        .map((i) => i.trim())
        .filter(Boolean)
        .forEach((ingredient) => data.append("ingredients", ingredient));

      Object.entries(nutrition).forEach(([key, value]) => {
        if (value !== "") data.append(`nutrition[${key}]`, value);
      });

      if (imageFile) data.append("image", imageFile);

      const res = await fetch(API_URL, {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || `Request failed (${res.status})`);
      }

      setStatus("success");
      resetForm();
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      <div className="max-w-3xl px-4 py-10 mx-auto sm:py-14">
        {/* Header */}
        <div className="flex items-center gap-3 mb-1">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-500 shrink-0">
            <Droplet className="w-5 h-5 text-white" fill="white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-stone-900">
            Add a new juice
          </h1>
        </div>
        <p className="pl-0 mb-8 text-stone-500 ml-13 sm:ml-13">
          Fill in the details below to list a fresh juice on the menu.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image upload */}
          <section className="p-5 bg-white border rounded-2xl border-stone-200 sm:p-6">
            <h2 className="mb-4 text-sm font-semibold tracking-wide uppercase text-stone-900">
              Product image
            </h2>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="relative flex flex-col items-center justify-center px-4 py-8 overflow-hidden text-center transition-colors border-2 border-dashed cursor-pointer rounded-xl border-stone-300 hover:border-lime-500 bg-stone-50 hover:bg-lime-50"
            >
              {imagePreview ? (
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="object-cover w-32 h-32 border rounded-xl border-stone-200"
                  />
                  <span className="text-sm text-stone-500">
                    Click or drop a new image to replace
                  </span>
                </div>
              ) : (
                <>
                  <UploadCloud className="w-8 h-8 mb-2 text-lime-600" />
                  <p className="text-sm font-medium text-stone-700">
                    Drag a photo here, or click to browse
                  </p>
                  <p className="mt-1 text-xs text-stone-400">
                    PNG or JPG, ideally square
                  </p>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageSelect(e.target.files?.[0])}
              />
            </div>
          </section>

          {/* Basic details */}
          <section className="p-5 space-y-4 bg-white border rounded-2xl border-stone-200 sm:p-6">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-stone-900">
              Basic details
            </h2>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                Name
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={handleFieldChange("name")}
                placeholder="e.g. Fresh Mosambi Juice"
                className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Price (₹)
                </label>
                <input
                  required
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.price}
                  onChange={handleFieldChange("price")}
                  placeholder="70"
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={handleFieldChange("category")}
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                Description
              </label>
              <textarea
                rows={3}
                value={form.description}
                onChange={handleFieldChange("description")}
                placeholder="Sweet and tangy juice made from selected ripe fruit."
                className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent resize-none"
              />
            </div>
          </section>

          {/* Ingredients */}
          <section className="p-5 bg-white border rounded-2xl border-stone-200 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-stone-900">
                Ingredients
              </h2>
              <button
                type="button"
                onClick={addIngredientField}
                className="flex items-center gap-1 text-sm font-medium text-lime-700 hover:text-lime-800"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

            <div className="space-y-2">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                    placeholder="e.g. No artificial colors"
                    className="flex-1 rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => removeIngredientField(index)}
                    disabled={ingredients.length === 1}
                    className="p-2 transition-colors text-stone-400 hover:text-red-500 disabled:opacity-30 disabled:hover:text-stone-400"
                    aria-label="Remove ingredient"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Nutrition */}
          <section className="p-5 bg-white border rounded-2xl border-stone-200 sm:p-6">
            <h2 className="mb-4 text-sm font-semibold tracking-wide uppercase text-stone-900">
              Nutrition facts
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Calories
                </label>
                <input
                  type="number"
                  min="0"
                  value={nutrition.calories}
                  onChange={handleNutritionChange("calories")}
                  placeholder="120"
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Sugar
                </label>
                <input
                  type="text"
                  value={nutrition.sugar}
                  onChange={handleNutritionChange("sugar")}
                  placeholder="25g"
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Vitamin C
                </label>
                <input
                  type="text"
                  value={nutrition.vitaminC}
                  onChange={handleNutritionChange("vitaminC")}
                  placeholder="90mg"
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Carbs
                </label>
                <input
                  type="text"
                  value={nutrition.carbs}
                  onChange={handleNutritionChange("carbs")}
                  placeholder="30g"
                  className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Status messages */}
          {status === "error" && (
            <div className="flex items-start gap-2 px-4 py-3 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
          {status === "success" && (
            <div className="flex items-start gap-2 px-4 py-3 text-sm border rounded-lg bg-lime-50 border-lime-200 text-lime-700">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Product added successfully.</span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center w-full gap-2 py-3 text-sm font-semibold text-white transition-colors rounded-lg bg-lime-600 hover:bg-lime-700 disabled:bg-lime-400"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Adding product...
              </>
            ) : (
              "Add product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}