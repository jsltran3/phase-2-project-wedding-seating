import React from "react";

function CreateNewGuest() {
    return (
        <div>
            <h2>New Guest</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <form>
                <label>
                    Content:
                    <input type="text" name="content" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateNewGuest;