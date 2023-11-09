import Image from "next/image"

const StakedCard = () => {
  return (
    <div className="w-[100%] h-[50%] flex-col justify-center items-center p-10 gap-5 inline-flex">
    <div className="self-stretch h-[100%] p-8 bg-neutral-600 bg-opacity-30 rounded-[32px] border border-white backdrop-blur-[30px] justify-center items-center gap-[10px] inline-flex">
        <div className="grow shrink basis-0 h-5 justify-start items-center gap-4 flex">
            <div className="flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-white text-1xl font-normal font-['Space Grotesk'] leading-loose">
                  Your Staked Algo
                  </div>
            </div>
            <div className="grow shrink flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-white text-2xl font-bold font-['Space Grotesk'] leading-loose">
                  0.0 Algo
                  </div>
            </div>
        </div>
        <div className="justify-start items-center gap-3 flex">
            <div className="flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-white text-1xl font-bold font-['Space Grotesk'] leading-loose">
                  Stake here
                  </div>
            </div>
        </div>
    </div>
    <div className="self-stretch justify-start items-start gap-4 inline-flex">
        <div className="grow shrink basis-0 self-stretch p-5 bg-neutral-600 bg-opacity-30 rounded-[20px] border border-white backdrop-blur-[20px] flex-col justify-center items-start gap-[20px] flex">
        <Image src="/vote.png" className="w-[65px] h-[65px]"alt="vote" width={100} height={100}/>
            <div className="self-stretch h-[150px] flex-col justify-center items-start gap-4 flex">
                <div className="self-stretch h-[100px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-white text-[32px] font-bold font-['Space Grotesk'] leading-10">Stake + Vote</div>
                    <div className="self-stretch text-white text-1xl font-normal font-['Space Grotesk'] leading-loose">Stake more, vote more, earn more Algorand</div>
                </div>
                <div className="w-[170px] h-[60px] px-10 py-2 bg-green-200 rounded-2xl justify-center items-center gap-2 inline-flex">
                    <div className="text-green-950 text-2xl font-normal font-['Space Grotesk'] leading-loose">Vote</div>
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch p-8 bg-neutral-600 bg-opacity-30 rounded-[32px] border border-white backdrop-blur-[30px] flex-col justify-start items-start gap-[29px] inline-flex">
        <Image src="/vote.png" className="w-[65px] h-[65px]"alt="vote" width={100} height={100}/>
            <div className="self-stretch h-[196px] flex-col justify-center items-start gap-4 flex">
                <div className="self-stretch h-[120px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-white text-[32px] font-bold font-['Space Grotesk'] leading-10">Utility</div>
                    <div className="self-stretch text-white text-1xl font-normal font-['Space Grotesk'] leading-loose">Discover more from staking Algo and benefits</div>
                </div>
                <div className="h-[60px] px-10 py-2 bg-green-200 rounded-2xl justify-center items-center gap-2 inline-flex">
                    <div className="text-green-950 text-2xl font-normal font-['Space Grotesk'] leading-loose">Read More</div>
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 p-8 bg-neutral-600 bg-opacity-30 rounded-[32px] border border-white backdrop-blur-[30px] flex-col justify-start items-start gap-[29px] inline-flex">
        <Image src="/vote.png" className="w-[65px] h-[65px]"alt="vote" width={100} height={100}/>
        
            <div className="self-stretch h-[196px] flex-col justify-center items-start gap-4 flex">
                <div className="self-stretch h-[120px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-white text-[25px] font-bold font-['Space Grotesk'] leading-10">DAO Governance</div>
                    <div className="self-stretch text-white text-1xl font-normal font-['Space Grotesk'] leading-loose">With Algo tokens, vote on proposals and receive rewards in ALGO</div>
                </div>
                <div className="w-[170px] h-[60px] px-10 py-2 bg-green-200 rounded-[32px] justify-center items-center gap-1 flex-col inline-flex">
                    <div className="text-green-950 text-2xl font-normal font-['Space Grotesk'] leading-loose">FAQs</div>
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default StakedCard