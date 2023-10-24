import Button from "../button"

const Premium = () => {
  return (
    <section 
    className="bg-[#161881c] mb-4 rounded-2xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5 ">
  <h6 className="text-xl leading-6 font-extrabold">Subscribe to Premium</h6>
  <span className="leading-5 text-[15px] font-bold">Subscribe to unlock new features and if eligible, receive a share of ads revenue.
  </span>
  <div className="self-start">
  <Button size='normal'>Subscribe</Button>
  </div>

    </section>




  )
}

export default Premium