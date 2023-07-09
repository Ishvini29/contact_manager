

import React from "react";
import user from "../images/user.png";
import Swal from 'sweetalert2';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    const handleDeleteClick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete the contact details about ${name}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                // Call the delete handler function
                props.clickHandler(id);
            }
        });
    };
    return (
        <div className="px-6 item">
            <hr />
            <div className="flex items-center">
                <img
                    className="ui avatar image"
                    src={user}
                    alt="user"
                    height="40px"
                    width="40px"
                    style={{ marginRight: "10px", marginLeft: "20px" }} // Add margin to create space
                />
                <div className="content flex-grow text-gray-700">
                    <span>{name}</span> <br />
                    <span>{email}</span> {/* Add span elements for name and email */}
                </div>
                <button
                    className="shadow bg-red-700 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded"
                    type="button"
                    style={{ marginRight: "100px" }}
                    onClick={handleDeleteClick}
                >
                    Delete
                </button>
            </div>
            <hr />
        </div>
    );
};

export default ContactCard;

