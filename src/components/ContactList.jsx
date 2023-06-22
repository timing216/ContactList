import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  // ....your component logic
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => {
            return (
              <ContactRow
                setSelectedContact={contact.ContactList}
                key={contact.id}
                contact={contact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
