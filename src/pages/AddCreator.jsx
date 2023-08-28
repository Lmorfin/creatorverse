import { useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
function AddCreator() {
  const addCreator = async () => {
    const { name, description, url, imageURL } = formData;

    const insertCreator = await supabase
      .from("creators")
      .insert([{ name, url, description, imageURL }])
      .single();

    console.log("RES", insertCreator);
  };

  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Add Content Creator</h1>
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleInputChange}
          />
        </div>
        <Link to="/">
          <button type="button" onClick={addCreator}>
            Add
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddCreator;
