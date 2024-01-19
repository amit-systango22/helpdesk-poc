import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ticketStyle.css"; 

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {

      const response = await axios.get(
        'https://systango.freshdesk.com/api/v2/tickets',
        {
          params: {
            include: 'company, description, requester',
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa('x86SthYDzxp2kuZ3H0mE'),
          },
        }
      );

      // const response = await axios.get(
      //   "https://systango.freshdesk.com/api/v2/tickets",
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: "Basic " + btoa("x86SthYDzxp2kuZ3H0mE"),
      //     },
      //   }
      // );

      setTickets(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setLoading(false);
    }
  };
  return (
    <div className="ticket-list">
      <h2>Ticket List</h2>

      {loading ? (
        <p>Loading tickets...</p>
      ) : tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              <strong>{ticket.subject}</strong>
              <p>{ticket.description}</p>
              <p>Email: {ticket.email}</p>
              <p>Priority: {ticket.priority}</p>
              <p>Status: {ticket.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TicketList;

