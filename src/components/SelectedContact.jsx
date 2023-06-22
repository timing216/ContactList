import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  console.log(contact);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}"
        );
        const result = await response.json();
        setContact(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
  }, []);
  return <> {contact && <p>{contact.email}</p>}</>;
}
