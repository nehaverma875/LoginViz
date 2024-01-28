import React from 'react'
import ImagesLogo from '../assets/imags.png' ;
import {  AiOutlineEyeInvisible } from "react-icons/ai";
import  DataReport from '../assets/Data-report.png';
import CompanyLogo from '../assets/logo.png';
 

const Loginpage = () => {
  return (
    <div>
      {/* Login-Image  */}
       <section>
      <span className=' flex mt-10 ml-10 ' >
        <img src={ImagesLogo} alt='login-Img' width='312px' height='93px'  />
        

      </span>
      
      </section>

      <div className='flex  flex-row  justify-center gap-4'>
        
    
{/*  LogIn Form */}
      <section className='min-w-[470px] min-h-[592px]'>
        <form className="flex flex-col   mt-28 " >



        <div>
          <span className='text-4xl text-[#020C6B]'    >Login</span>
          <p className='text-xl'>Please login to continue</p>
          <br/>

        </div>
{/*  input box*/}
        <div className='min-w-[416px] min-h-[295px]'>

          <span className=" ">
          <input type='mail' placeholder="Email" 
              className={`w-[416px] h-[68px] border-2 text-2xl rounded-md border-slate-400 flex justify-items-center `}
                        
                        
                      />
                      <br/>

                       <input type='password' placeholder="Password" 
              className={`w-[416px] h-[68px] border-2 text-2xl rounded-md
               border-slate-400 flex justify-items-center `}
                        />
                        <span className=' cursor-pointer'><AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' className='-mt-10  ml-[23rem]'/>
                        {/* <AiOutlineEye fontSize={24} fill='#AFB2BF'/>*/}</span> 
          </span>
          {/*  radio button*/}
          <br/>

         <div  className=' flex gap-[4.3rem]'>
          <span>
          <label  className='w-full flex'>
           
          <input type="checkbox" id="checkvbox" name="checkbox" value=" checkbox"   />
          <p>Keep Me Logged In</p>
           </label>

          
                     </span>
                     <br/>
                     <span className='flex  '>
                      Forget Password ?
                     </span>


          </div>
          {/*  It's Login button*/}
          <span>
            <button className='text-3xl  min-w-[416px] min-h-[68px]  bg-[#020C6B] rounded-[8px] font-medium text-white px-[12px] py-[8px] mt-6'>
              LOGIN
            </button>
            <p className='text-[16px] text-gray-500'>By logining up, you agree to our Terms of Service and <br/> Privacy Policy</p>
          </span>
          

        </div>

        </form>

       
      </section>


    <section  className='  flex items-center  ml-26  -mt-18'>
    <div class="border border-gray-300  -mt-10 w-2/12 h-[600px]  "></div>


    
    </section>
    {/* data */}


    <div className=' -mt-30'>
    <section className=' flex  flex-col items-center  justify-end  w-[700px] h-[700px] '>
  <h2 className='text-4xl'>Data Visualized, Decisions Amplified</h2>
<img src={DataReport} alt='DataReport'  className='w-[729px] h-[580px]'/>
<p className='text-[16px] text-gray-500 flex  justify-end items-end'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>


    </section>





    </div>
    
   
      </div>
      <div className='flex justify-end'>
      <img src={CompanyLogo} alt='company-logo'/>
    </div>
    </div>
  )
}

export default Loginpage
