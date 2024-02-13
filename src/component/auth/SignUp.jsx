import React from 'react'

export default function SignUp() {
  return (
    <div>
      <SignUpDesign/>
    </div>
  )
}


export const SignUpDesign = () =>{
    return(
        <div>
            <div className="mt-20 mb-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-[90%] md:w-[35%] m-auto">
                <h2 className="text-2xl font-semibold text-white bg-black p-3 rounded-lg mb-6 text-center">Sign Up</h2>

                <form>
                    <div className="mb-4">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">Full Name</label>
                        <input type="text" id="fullname" name="fullname" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your full name" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                        <input type="text" id="username" name="username" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your username" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Confirm Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter confirm password" required />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-600">
                    Already have an account? <a href="#" className="text-blue-500">Login</a>
                </p>
            </div>
        </div>


        </div>
    )
}
 
