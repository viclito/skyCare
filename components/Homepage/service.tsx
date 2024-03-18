"useClient"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import ocean from '../../public/assets/ocean.jpg'
import air from '../../public/assets/air.jpg'
import breakbulk from '../../public/assets/breakbulk.jpg'
import cross from '../../public/assets/close.png'
import styles from '../navbar/navbar.module.css'
import { useScroll , motion, useTransform } from 'framer-motion'

interface SmallImageProps {
    oneFunc: () => void;
    twoFunc: () => void;
    threeFunc: () => void;

  }

const SmallImage:React.FC<SmallImageProps> = ({oneFunc , twoFunc, threeFunc})=>{
    return(
        <>
            <div className='p-3 flex  justify-center gap-7'>
                <motion.div initial={{y:0}} whileHover={{y:-2}} transition={{duration:.5}} className='flex flex-col cursor-pointer ' onClick={oneFunc}>
                    <Image src={ocean} alt='' className='h-7 w-10 rounded-md'/>

                </motion.div>
                <motion.div initial={{y:0}} whileHover={{y:-2}} transition={{duration:.5}} className='flex flex-col cursor-pointer ' onClick={twoFunc}>
                    <Image src={air} alt='' className='h-7 w-10 rounded-md'/>

                </motion.div>
                <motion.div initial={{y:0}} whileHover={{y:-2}} transition={{duration:.5}} className='flex flex-col cursor-pointer ' onClick={threeFunc}>
                    <Image src={breakbulk} alt='' className='h-7 w-10 rounded-md'/>

                </motion.div>
               

            </div>
        </>
    )
}


const Service = () => {
    const ref = useRef(null)
    const{scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["0 2", "1 1"]
        }
    )
    const scaleProgress = useTransform(scrollYProgress,[0,1],[.5,1])


    const [zero, setZero]=useState(true)
    const [one, setOne]=useState(false)
    const [two, setTwo]=useState(false)
    const [three, setThree]=useState(false)


    const oneFunc= ()=>{
        setOne(true)
        setTwo(false) 
        setThree(false)
        
        setZero(false)
    }
    const twoFunc= ()=>{
        setOne(false)
        setTwo(true) 
        setThree(false)
        
        setZero(false)
    }
    const threeFunc= ()=>{
        setOne(false)
        setTwo(false) 
        setThree(true)
        
        setZero(false)
    }

    const zeroFunc= ()=>{
        setOne(false)
        setTwo(false) 
        setThree(false)
        
        setZero(true)
    }
  return (
    <>
        <div className='max-w-[1400px] px-6 mx-auto'>
            <div className='font-bold text-4xl lg:text-3xl md:text-2xl  text-center '>SERVICES</div>
            <div className='flex w-[100%] xl:flex-col pt-10 items-center md:gap-12'>
                {/* left */}
                <div className='w-[60%] xl:w-[100%] flex relative h-[500px] md:h-[300px] items-center justify-center' ref={ref}>
                    <div className='flex flex-col md:w-[360px] xs:w-[300px] relative m-auto md:h-[calc(200px+30px)] h-[400px] w-[650px]'>

                        {/* <motion.div style={{scaleY:scaleProgress, opacity:scaleProgress}} initial={{y:50}} whileInView={{y:0}} transition={{duration:.5}} className={` bg-white absolute overflow-hidden flex items-center justify-center transition-all duration-100 ${styles.image} ${one? 'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg left-0 top-0': 'h-[300px] w-[180px] md:h-[200px] md:w-[120px] xs:w-[100px] xs:h-[180px] rounded-full'}`} onClick={oneFunc}>
                            <Image src={ocean} alt='' className={`  ${styles.one} ${one?'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg':'h-[290px] w-[170px] md:h-[190px] md:w-[110px] xs:w-[90px] xs:h-[170px] rounded-full'}`}/>
                            <h1 className={`absolute top-10 z-20 font-bold text-white p-1 rounded-md text-sm text-center `}>Ocean <br /> Frieght</h1>
                        </motion.div>
                        <motion.div style={{scaleY:scaleProgress, opacity:scaleProgress}} initial={{y:50}} whileInView={{y:0}} transition={{duration:.5}} className={` bg-white absolute overflow-hidden   flex items-center justify-center transition-all duration-100 ${styles.image} ${two? 'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg left-0 top-0': 'h-[300px] w-[180px] md:h-[200px] md:w-[120px] left-[120px] md:left-[60px] xs:left-[50px] xs:w-[100px] xs:h-[180px] top-24 rounded-full'}`} onClick={twoFunc}>
                            <Image src={air} alt='' className={` ${styles.two} ${two?'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg':'h-[290px] w-[170px] md:h-[190px] md:w-[110px] xs:w-[90px] xs:h-[170px] rounded-full'}`}/>
                            <h1 className={`absolute bottom-10 z-20 font-bold text-white p-1 rounded-md text-sm text-center`}>Air <br /> Frieght</h1>
                        </motion.div>
                        <motion.div style={{scaleY:scaleProgress, opacity:scaleProgress}} initial={{y:50}} whileInView={{y:0}} transition={{duration:.5}} className={` bg-white absolute overflow-hidden flex items-center justify-center transition-all duration-100 ${styles.image} ${three? 'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg left-0 top-0': 'h-[300px] w-[180px] md:h-[200px] md:w-[120px] rounded-full left-[calc(120px+120px)] xs:w-[100px] xs:h-[180px] md:left-[calc(60px+60px)] xs:left-[calc(50px+50px)] '}`} onClick={threeFunc}>
                            <Image src={breakbulk} alt='' className={` ${styles.three} ${three?'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg':'h-[290px] w-[170px] md:h-[190px] md:w-[110px] xs:w-[90px] xs:h-[170px] rounded-full'}`}/>
                            <h1 className={`absolute top-10 z-20 font-bold text-white p-1 rounded-md text-sm text-center`}>Break <br /> bulk</h1>
                        </motion.div>
                        <motion.div style={{scaleY:scaleProgress, opacity:scaleProgress}} initial={{y:50}} whileInView={{y:0}} transition={{duration:.5}} className={` bg-white absolute overflow-hidden flex items-center justify-center transition-all duration-100 ${styles.image} ${four? 'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg left-0 top-0': 'h-[300px] w-[180px] md:h-[200px] md:w-[120px] rounded-full left-[calc(120px+120px+120px)] xs:w-[100px] xs:h-[180px] md:left-[calc(60px+60px+60px)] xs:left-[calc(50px+50px+50px)] top-24'}`} onClick={fourFunc}>
                            <Image src={warhouse} alt='' className={` ${styles.four} ${four?'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg':'h-[290px] w-[170px] md:h-[190px] md:w-[110px] xs:w-[90px] xs:h-[170px] rounded-full'}`}/>
                            <h1 className={`absolute bottom-10 z-20 font-bold text-white p-1 rounded-md text-sm text-center`}>Ware <br /> House</h1>
                        </motion.div>
                        <motion.div style={{scaleY:scaleProgress, opacity:scaleProgress}} initial={{y:50}} whileInView={{y:0}} transition={{duration:.5}} className={` bg-white absolute overflow-hidden  flex items-center justify-center transition-all duration-100 ${styles.image} ${five? 'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg left-0 top-0': 'h-[300px] w-[180px] md:h-[200px] md:w-[120px] rounded-full left-[calc(120px+120px+120px+120px)] xs:w-[100px] xs:h-[180px] md:left-[calc(60px+60px+60px+60px)] xs:left-[calc(50px+50px+50px+50px)]'}`} onClick={fiveFunc}>
                            <Image src={multi} alt='' className={` ${styles.five} ${five?'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg':'h-[290px] w-[170px] md:h-[190px] md:w-[110px] xs:w-[90px] xs:h-[170px] rounded-full'}`}/>
                            <h1 className={`absolute top-10 z-20 font-bold text-white p-1 rounded-md text-sm text-center`}>Multimodal <br /> transport</h1>
                        </motion.div> */}

                        <div className={`absolute bg-white flex items-center justify-center  ${one? 'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg left-0 top-0': 'h-[160px] w-[400px] md:w-[210px] md:h-[100px] xs:w-[190px] top-0 left-[20px] xs:left-0 z-10 rounded-full'} ${styles.image}`} onClick={oneFunc}>
                            <Image src={ocean} alt='' className={`  ${styles.one} ${one?'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg':'h-[150px] w-[390px] md:h-[90px] xs:w-[180px] md:w-[200px] rounded-full'}`}/>
                        </div>
                        <div className={`absolute bg-white flex items-center justify-center  ${two? 'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg left-0 top-0': 'h-[160px] w-[400px]  md:w-[210px] md:h-[100px] xs:w-[190px] top-[120px] left-[120px] xs:left-[100px] md:top-[60px] z-20 rounded-full'} ${styles.image}`} onClick={twoFunc}>
                            <Image src={air} alt='' className={`  ${styles.two} ${two?'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg':'h-[150px] w-[390px] md:h-[90px] xs:w-[180px] md:w-[200px] rounded-full'}`}/>
                        </div>
                        <div className={`absolute bg-white flex items-center justify-center  ${three? 'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg left-0 top-0': 'h-[160px] w-[400px]  md:w-[210px] xs:w-[190px] md:h-[100px] top-[240px] left-[20px] xs:left-0 md:top-[120px] z-10 rounded-full'} ${styles.image}`} onClick={threeFunc}>
                            <Image src={breakbulk} alt='' className={`  ${styles.three} ${three?'h-[400px] w-[670px] z-40 md:h-[290px] md:w-[360px] xs:h-[260px] xs:w-[300px] rounded-lg':'h-[150px] w-[390px] md:h-[90px] xs:w-[180px] md:w-[200px] rounded-full'}`}/>
                        </div>
                    </div>
                </div>
                {/* right */}
                {zero ?
                <div className='flex flex-col gap-4 w-[40%] xl:w-[100%] mx-auto justify-center items-center py-4'>
                    <h1 className='text-2xl font-bold text-center pb-6'>Services we Provide</h1>
                    <h3 className='w-[250px] p-2 border-2 border-solid bg-primary cursor-pointer text-white text-center font-bold rounded-3xl' onClick={oneFunc}>Declaration and Documentation</h3>
                    <h3 className='w-[250px] p-2 border-2 border-solid bg-primary cursor-pointer text-white text-center font-bold rounded-3xl' onClick={twoFunc}>Duty and Tax Calculation</h3>
                    <h3 className='w-[250px] p-2 border-2 border-solid bg-primary cursor-pointer text-white text-center font-bold rounded-3xl' onClick={threeFunc}>Transport</h3>
                    
                </div>
                :""}
                {
                    one?<div className={`flex flex-col relative gap-3 w-[40%] xl:w-[70%] md:w-[100%] py-4 ${styles.glasscomponent}`} >
                        <Image src={cross} alt='' className='absolute right-4 top-4 w-4 h-4 cursor-pointer' onClick={zeroFunc}/>
                        <h2 className='text-xl font-semibold text-center text-primary'>Declaration and Documentation</h2>
                        <h3 className='text-base font-medium p-3'>Preparation and submission of necessary import/export documentation, such as commercial invoices, packing lists, bills of lading, and certificates of origin. Submission of customs declarations to the relevant authorities to ensure compliance with customs regulations.</h3>
                        <SmallImage oneFunc={oneFunc} twoFunc={twoFunc} threeFunc={threeFunc} />
                        
                    </div>

                    :''
                }
                {
                    two?<div className={`flex flex-col relative gap-3 w-[40%] xl:w-[70%] md:w-[100%] py-4 ${styles.glasscomponent}`} >
                        <Image src={cross} alt='' className='absolute right-4 top-4 w-4 h-4 cursor-pointer' onClick={zeroFunc}/>
                        <h2 className='text-xl font-semibold text-center text-primary'>Duty and Tax Calculation</h2>
                        <h3 className='text-base font-medium p-3'>Calculation and payment of customs duties, taxes, and other fees on behalf of the client. Acting as a customs broker to facilitate communication between the client and customs officials. Providing advice on customs regulations, import/export restrictions, and ensuring overall trade compliance.</h3>
                        <SmallImage oneFunc={oneFunc} twoFunc={twoFunc} threeFunc={threeFunc} />
                        
                    </div>

                    :''
                }
                {
                    three?<div className={`flex flex-col relative gap-3 w-[40%] xl:w-[70%] md:w-[100%] py-4 ${styles.glasscomponent}`} >
                        <Image src={cross} alt='' className='absolute right-4 top-4 w-4 h-4 cursor-pointer' onClick={zeroFunc}/>
                        <h2 className='text-xl font-semibold text-center text-primary'>Transport</h2>
                        <h3 className='text-base font-medium p-3'>Offering various modes of transportation, such as road transport (trucking), rail, air freight, sea freight, and multimodal solutions, based on the nature and requirements of the cargo. Implementing tracking systems and technologies to provide real-time visibility into the status and location of shipments, enhancing transparency for clients.</h3>
                        <SmallImage oneFunc={oneFunc} twoFunc={twoFunc} threeFunc={threeFunc} />
                        
                    </div>

                    :''
                }
                
            </div>
        </div>
    </>
  )
}

export default Service