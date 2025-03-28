import { useState } from "react"
import SideBarMenu from "./SideBarMenu"

export default function DeliveryDashboard() {
  const [activeMenu, setActiveMenu] = useState("Delivery")
  const [activeTab, setActiveTab] = useState("pending")

  const handleDeleteOrder = (orderId) => {
    // In a real app, you would call an API to delete the order
    alert(`Order ${orderId} would be deleted`)
  }

  const handleApproveOrder = (orderId) => {
    // In a real app, you would call an API to approve the order
    alert(`Order ${orderId} would be approved`)
  }

  const deliveryData = [
    {
      orderNumber: "MPL124423",
      customer: "Nancy Worgan",
      orderedAt: "6:12am",
      orderItems: "1 item",
      itemDelivery: "Delivery",
      deliveryLocation: "Vienna Westside Center 1/4 Building 19",
      orderTotal: "500",
      deliveryGuy: "Alvin Curtis",
      deliveryStatus: "Pending",
    },
    {
      orderNumber: "MPL124422",
      customer: "Nancy Worgan",
      orderedAt: "6:12am",
      orderItems: "1 item",
      itemDelivery: "Pick up",
      deliveryLocation: "Vienna Westside Center 1/4 Building 19",
      orderTotal: "500",
      deliveryGuy: "Alvin Curtis",
      deliveryStatus: "Pending",
    },
    {
      orderNumber: "MPL124422",
      customer: "Adam Black",
      orderedAt: "6:00pm",
      orderItems: "2 items",
      itemDelivery: "Pick up",
      deliveryLocation: "Vienna Westside Center 1/4 Building 19",
      orderTotal: "14,500",
      deliveryGuy: "Alvin Curtis",
      deliveryStatus: "Pending",
    },
    {
      orderNumber: "MPL124472",
      customer: "Constance Nkuta",
      orderedAt: "5:23pm",
      orderItems: "4 items",
      itemDelivery: "Drive Through",
      deliveryLocation: "Vienna Westside Center 1/4 Building 19",
      orderTotal: "10,000",
      deliveryGuy: "Alvin Curtis",
      deliveryStatus: "Pending",
    },
  ]

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex h-screen">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        
      <div className="flex-1 flex flex-col">
        <header className="bg-white p-4 border-b flex justify-between items-center">
          <div className="relative w-64">
            <div className="absolute left-2 top-2.5 h-4 w-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 w-full placeholder-black text-black rounded-md border border-gray-200 bg-gray-50 text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img 
                src="data:image/jpeg;base64,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"
              alt="User" className="h-full w-full object-cover" />
            </div>
            <span className="text-sm text-black font-medium">Andre</span>
            <div className="h-4 w-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 bg-stone-100 overflow-auto">
          <div className="mb-6">
            <h1 className="text-xl text-black font-bold">Delivery</h1>
            <p className="text-sm text-gray-500">Get track of all your deliveries.</p>
          </div>

          <div className="bg-white rounded-md shadow-sm">
            <div className="p-4 flex justify-between items-center border-b">
              <div className="flex items-center gap-2">
                <h2 className="font-medium text-black">Delivery logs</h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border rounded-md px-3 py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span className="text-sm">04/03/2023</span>
                </div>
                <button className="flex items-center text-black gap-2 px-3 py-1.5 border rounded-md bg-white hover:bg-gray-50 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download report
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full">
              <div className="border-b px-5">
                <div className="flex">
                  <button
                    onClick={() => handleTabChange("pending")}
                    className={`py-2 px-4 text-sm ${activeTab === "pending" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"}`}
                  >
                    Pending (4)
                  </button>
                  <button
                    onClick={() => handleTabChange("delivered")}
                    className={`py-2 px-4 text-sm ${activeTab === "delivered" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"}`}
                  >
                    Delivered/ Picked up (4)
                  </button>
                  <button
                    onClick={() => handleTabChange("canceled")}
                    className={`py-2 px-4 text-sm ${activeTab === "canceled" ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-500"}`}
                  >
                    Canceled (0)
                  </button>
                </div>
              </div>

              <div className={activeTab === "pending" ? "block" : "hidden"}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50 text-xs text-black">
                        <th className="py-3 px-4 text-left font-medium">Order number</th>
                        <th className="py-3 px-4 text-left font-medium">Customer</th>
                        <th className="py-3 px-4 text-left font-medium">Ordered at</th>
                        <th className="py-3 px-4 text-left font-medium">Order items</th>
                        <th className="py-3 px-4 text-left font-medium">Item delivery</th>
                        <th className="py-3 px-4 text-left font-medium">Delivery Location</th>
                        <th className="py-3 px-4 text-left font-medium">Order total</th>
                        <th className="py-3 px-4 text-left font-medium">Delivery guy</th>
                        <th className="py-3 px-4 text-left font-medium">Delivery Status</th>
                        <th className="py-3 px-4 text-left font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliveryData.map((order, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-black text-sm">{order.orderNumber}</td>
                          <td className="py-3 px-4 text-sm text-blue-600">{order.customer}</td>
                          <td className="py-3 px-4 text-black text-sm">{order.orderedAt}</td>
                          <td className="py-3 px-4 text-black text-sm">{order.orderItems}</td>
                          <td className="py-3 px-4 text-black text-sm">{order.itemDelivery}</td>
                          <td className="py-3 px-4 text-sm text-gray-500 max-w-xs truncate">
                            {order.deliveryLocation}
                          </td>
                          <td className="py-3 px-4 text-black text-sm">{order.orderTotal}</td>
                          <td className="py-3 px-4 text-black text-sm">{order.deliveryGuy}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">
                              {order.deliveryStatus}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleDeleteOrder(order.orderNumber)}
                                className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs hover:bg-red-200 transition-colors"
                                title="Delete"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M3 6h18"></path>
                                  <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"></path>
                                  <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                </svg>
                              </button>
                              <button
                                onClick={() => handleApproveOrder(order.orderNumber)}
                                className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs hover:bg-green-200 transition-colors"
                                title="Approve"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                              </button>
                              <button
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-gray-200 transition-colors"
                                title="More Options"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className={activeTab === "delivered" ? "block" : "hidden"}>
                <div className="p-8 text-center text-gray-500">No delivered orders to display</div>
              </div>

              <div className={activeTab === "canceled" ? "block" : "hidden"}>
                <div className="p-8 text-center text-gray-500">No canceled orders to display</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

