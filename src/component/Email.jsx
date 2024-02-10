const Email = () => {
    return (
        <div className="bg-[#005F68]">
            <div className="container text-center mx-auto text-white space-y-8 px-5 py-20">
                <p className="text-2xl">Get Started</p>
                <h1 className="text-2xl sm:text-5xl">Enter your email address and get <br />started for free</h1>
                <form className="max-w-2xl mx-auto w-full grid grid-cols-[2fr,1fr] bg-white rounded-lg group p-2">
                    <input type="Email" className="w-full text-black px-6 focus:outline-none" placeholder="Enter your email" />
                    <button className="text-white bg-red-900 px-3 py-2 rounded-lg">Get Started For Free</button>
                </form>
            </div>
        </div>
    );
}
export default Email;