import React from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useState, useEffect } from "react";

const Premium = () => {
  const [isPremium, setIsPremium] = useState(false);

  // check if user is premium or not when the page loadsfor the first time (Hooks are called at the top level of the component)
  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/premium/verify", {
        withCredentials: true,
      });

      // console.log("Premium Verify Response:", res.data.isPremium);

      if (res.data?.isPremium) {
        setIsPremium(true);
      }
      // console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleBuyClick = async (membershipType) => {
    //make an api call to server and create order
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType,
      },
      { withCredentials: true }
    );

    const { amount, keyId, currency, notes, orderId } = order.data;

    const options = {
      key: keyId, // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Dev Tinder", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: notes.firstName + notes.lastName, //your customer's name
        email: notes.emailId,
        contact: "9999999999", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      handler: verifyPremiumUser,
    };

    //IT SHOULD OPEN THE RAZORPAY DIALOG BOX
    const rzp1 = new window.Razorpay(options); //Razorpay comes from the script file we attached in index.html
    rzp1.open(); //it will open the dialog box
  };
  //   console.log(isPremium);
  return isPremium ? (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="max-w-md w-full bg-gradient-to-br from-green-200 to-green-400 text-black rounded-xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">🌟 You're a Premium Member!</h2>
        <p className="text-md mb-6">
          Thank you for subscribing to our premium plan.
        </p>
        <ul className="list-disc list-inside text-left text-sm mb-4">
          <li>Access to all premium features</li>
          <li>Priority customer support</li>
          <li>Unlimited connections</li>
          <li>Blue tick on your profile</li>
        </ul>
        <p className="mt-4 text-sm text-gray-700">
          Enjoy your premium experience! 🚀
        </p>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Silver Plan */}
        <div className="card flex-1 bg-gradient-to-br from-gray-100 to-gray-300 text-black shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">🥈 Silver Plan</h2>
            <p className="text-sm mt-2 mb-4">
              Perfect for starters. Enjoy basic features to explore the
              platform.
            </p>
            <ul className="list-disc list-inside text-left text-sm mb-4">
              <li>Basic matching algorithm</li>
              <li>Chat with other people</li>
              <li>100 connection Requests per day</li>
              <li>Blue tick</li>
            </ul>
            <div className="text-xl font-semibold mb-4">₹199/month</div>
            <button
              onClick={() => handleBuyClick("silver")}
              className="btn btn-outline btn-neutral"
            >
              Choose Silver
            </button>
          </div>
        </div>

        {/* Gold Plan */}
        <div className="card flex-1 bg-gradient-to-br from-yellow-200 to-yellow-500 text-black shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">🥇 Gold Plan</h2>
            <p className="text-sm mt-2 mb-4">
              For serious devs. Unlock premium features and stand out!
            </p>
            <ul className="list-disc list-inside text-left text-sm mb-4">
              <li>Advanced matching algorithm</li>
              <li>Chat with other people</li>
              <li>Unlimited connection Requests per day</li>
              <li>Blue Tick</li>
              <li>Priority support</li>
            </ul>
            <div className="text-xl font-semibold mb-4">₹499/month</div>
            <button
              onClick={() => handleBuyClick("gold")}
              className="btn btn-warning text-black font-bold"
            >
              Go Gold
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
