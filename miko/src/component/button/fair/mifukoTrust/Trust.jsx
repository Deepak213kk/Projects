import React from 'react'
import trust from "../image3/mtrust.png"
import Haider from '../../../Haider'
import "./trust.css"
import Footer1 from "../../../footer/footer/Footer1"
import about from "../image3/trust1.png"
import staff from "../image3/truststaff.png"
function Trust() {
  return (
    <>
      <div className="trust-container">
        <div className="trusthaider">
          <Haider />
        </div>
        <div className="mtrustbtn">
          <img src={trust} alt="" width={1510} />
        </div>
        <div className='aboutcon'>
          <div className='aboutus'>
            <h1>
              ABOUT US
            </h1>
            <p>
              Welcome to Mifuko Trust web-page! We are a women's aid and advocacy organization founded in 2012. We strongly believe in the importance of empowering women to promote the well-being of the entire community. We work together with 40 women's self-help groups in 60 villages in rural southeastern Kenya, reaching about 1300 low-income families. The work of the Trust has a positive impact on the lives of about 8,000 women, men, and children. <br /><br />
              Members of the Mifuko Trust women's groups produce baskets for the fair trade company Mifuko and are also small-scale farmers. The work of Mifuko and Mifuko Trust complement each other, as Mifuko creates jobs and livelihoods for the self-help groups, while Mifuko Trust strengthens the well-being, resilience, and participation of women and their communities, for example through the WASH and Grow! project. <br /><br />
              Take a look at our website to find out more about our work and how you can support us by donating. Together, we can advance women's empowerment and the well-being of communities!
            </p>
          </div>
          <div>
            <img src={about} alt="" height={500} width={500} />
          </div>
        </div>
        <div className='aboutsus'>
          <h1>
            <b>
              SUSTAINABLE DEVELOPMENT GOALS
            </b>
          </h1>
          <p>
            Our efforts are guided by the Sustainable Development Goals (SDGs) of the United Nations. Achieving the goals by 2030 requires a holistic approach that takes into account the environment, social and economic sustainability and the promotion of human rights.
          </p>
          <p>Mifuko Trust is concentrating in its projects on the following sustainable development goals:

          </p>
        </div>
        <h1>
          <b>
            CONTACT DETAIL
          </b>
        </h1>
        <div className='contactdetail'>
          <div className='contact'>
            <h3>
              CONTACT
            </h3>
            <p>
              info@mifukotrust.org <br /><br />
              Hämeentie 130 A <br />
              00560 Helsinki, Finland <br /><br />
              Business ID: 2744748-6 <br /> <br />
              <h6>
                <b>
                  The Board of Directors
                </b>
              </h6>
              Minna Impiö (Chairperson) <br />
              Vilma Autio <br />
              Mari Martikainen <br />
              Henrik Suikkanen
            </p>
          </div>
          <div className='truststaff'>
            <img src={staff} alt="" height={200} width={200} />
            <br />
            <br />
            <h5>
              MIFUKO  TRUST STAFF
            </h5>
            <br />
            
            <p><b>Project Manager in Finland </b></p>
          
            <p>
              Anita Lintula <br />
              +358 45 783 430 62 <br />
              anita.lintula@mifukotrust.org <br />
            </p>
          
            <p><b>Project Manager in Kenya</b></p>
            
           <p>
           Peter Manyolo <br />
            +254 713 874 752  <br />
            peterlance.maundu@mifukotrust.org <br />
           </p>
            
            <p><b>Project Officer in Kenya</b></p>
      
           <p> Jacinta Peter <br />
            +254701561414 <br />
            jacinta.peter@mifukotrust.org</p>

          </div>
          <div className='truststaff'>

          </div>

        </div>
      </div>
      <div className='trustfooter'>
        <Footer1 />
      </div>
    </>
  )
}

export default Trust