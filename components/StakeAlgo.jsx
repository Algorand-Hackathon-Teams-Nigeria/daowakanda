
import Image from "next/image"

const StakeAlgo = () => {
  return (
    <div className="w-[100%] h-[100%] p-9 justify-start items-center inline-flex">
    <div className="flex-col justify-center items-center gap-2 inline-flex">
        <div className="w-[100%] border-b-2 border-stone-200 justify-between items-center flex">
            <div className="text-white text-2xl font-bold font-['Space Grotesk'] leading-[44px]">Stake Algo</div>
            <div className="text-white text-2xl font-bold font-['Space Grotesk'] leading-loose">Algo: $0.1207 </div>
        </div>
        <div className="flex-col justify-start items-start gap-[45px] w-[100%]flex">
            <p className="w-[100%] text-white text-[22px] font-normal font-['Space Grotesk'] leading-7">
                    Algorand and its ecosystem, including the DAO WAKANDA, 
                   are driven by the collective decisions of our community through DAO Wakanda,
                    a Decentralized Autonomous Organization. 
                    Community members actively participate by staking their tokens, 
                    thus gaining voting power to influence governance proposals that will shape the future of DAO Wakanda.
                     In return, contributors are rewarded with Wakanda (WDA) tokens, 
                      which are distributed from the platform's transaction fees.
              </p>
            <div className="self-stretch justify-between items-start inline-flex">
                <p className="text-orange-400 text-[22px] font-normal font-['Space Grotesk'] leading-7">Note: Staking WDA is only available on Algorand Blockchain</p>
                <div className="justify-start items-center gap-1 flex">
                    <p className="text-green-400 text-[22px] font-normal font-['Space Grotesk'] leading-7">Read about Algo</p>
                    <Image src="/arrow.svg" alt="arrow" className="w-6 h-6 relative" width={50} height={10}/>
                </div>
            </div>
        </div>
    </div>
    <Image src="/logo.png" className='w-[378px] h-[378px]' alt="logo" width={50} height={10}/>
</div>
  )
}

export default StakeAlgo