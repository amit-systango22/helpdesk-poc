import React, { useState } from "react";
import axios from "axios";
import "./ticketStyle.css";
import TicketList from "./ticketList";

const CustomCreateTicket = () => {
  const [ticketData, setTicketData] = useState({
    subject: "Mic not working",
    description: "test data",
    email: "newuser120@yopmail.com",
    priority: 2,
    status: 2,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketData({
      ...ticketData,
      [name]: name === "priority" ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://systango.freshdesk.com/api/v2/tickets",
        ticketData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("x86SthYDzxp2kuZ3H0mE"), 
          },
        }
      );
      console.log("Ticket created:", response.data);
      // Optionally, you can handle success or redirect the user
    } catch (error) {
      console.error("Error creating ticket:", error);
      // Optionally, you can handle the error and provide user feedback
    }
  };

  return (
    <>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={ticketData.subject}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={ticketData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={ticketData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Priority:
          <select
            name="priority"
            value={ticketData.priority}
            onChange={handleInputChange}
          >
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
            <option value={4}>Very Urgent</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Ticket</button>
      </form>
      <TicketList />
    </>
  );
};

export default CustomCreateTicket;
