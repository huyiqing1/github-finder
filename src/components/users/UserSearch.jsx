import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
    const [text, setText] = useState("");
    const { users, searchUsers, clearUsers } = useContext(GithubContext);


    const handleChange = (e) => {
        setText(e.target.value);
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Please enter something");
        } else {
            searchUsers(text);
            setText("");
        }
    }

    return (
        <div className="user-search grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <form onSubmit={hanldeSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input className="w-full pr-40 bg-gray-200 input input-lg text-black" type="text" placeholder="Search" value={text} onChange={handleChange} />
                        <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" type="submit">Go</button>
                    </div>
                </div>
            </form>
            {users.length > 0 && <button className="btn btn-ghost btn-lg" onClick={clearUsers}>Clear</button>}
        </div>
    );
}

export default UserSearch;