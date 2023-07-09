// import React from "react";
// import Swal from "sweetalert2";
// class AddContact extends React.Component {
//     state = {
//         name: "",
//         email: "",

//     };
//     add = (e) => {
//         e.preventDefault();
//         if (this.state.name === "" || this.state.email === "") {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'All the fields are mandatory!',
//             })
//             // alert("all the fields are mandatory!");
//             return;
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({ name: "", email: "" });
//         Swal.fire("Contact Created!", "The contact has been successfully created.", "success");
//     };
//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <form class="w-full max-w-sm" onSubmit={this.add}>
//                     <div class="md:flex md:items-center mb-6">
//                         <div class="md:w-1/3 ">
//                             <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
//                                 Full Name
//                             </label>
//                         </div>
//                         <div class="md:w-2/3">
//                             <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"
//                                 placeholder="Enter name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
//                         </div>
//                     </div>
//                     <div class="md:flex md:items-center mb-6">
//                         <div class="md:w-1/3">
//                             <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
//                                 E-mail
//                             </label>
//                         </div>
//                         <div class="md:w-2/3">
//                             <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-mail" type="email" placeholder="Enter email address" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
//                         </div>
//                     </div>

//                     <div class="md:flex md:items-center">
//                         <div class="md:w-1/3"></div>
//                         <div class="md:w-2/3">
//                             <button class="shadow bg-violet-800 hover:bg-violet-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
//                                 Add Contact
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//                 <br></br>
//             </div>
//         );
//     }

// }
// export default AddContact;


import React from "react";
import Swal from "sweetalert2";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            Swal.fire({
                icon: "error",
                title: "All the fields are mandatory!",
            });
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
        Swal.fire(
            "Contact Created!",
            "The contact has been successfully created.",
            "success"
        );
    };

    render() {
        return (
            <div>
                <br />
                <div className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <center><h2 className="text-xl mb-2 text-indigo-400"><b>Add Contact</b></h2></center>
                        <form onSubmit={this.add}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter name"
                                    value={this.state.name}
                                    onChange={(e) => this.setState({ name: e.target.value })}
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-indigo-400 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm font-bold mb-1"
                                >
                                    E-mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email address"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-indigo-400
                                    focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                >
                                    Add Contact
                                </button>
                            </div>
                        </form>
                    </div>
                </div></div>
        );
    }
}

export default AddContact;

