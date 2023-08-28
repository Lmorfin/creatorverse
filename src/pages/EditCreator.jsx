import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

function EditCreator() {
  const currentURL = window.location.href;
  const splitURL = currentURL.split("/edit-creator/");
  const uniqueIdentifier = splitURL[1];

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

  const getCreator = async (uniqueIdentifier) => {
    try {
      const creatorList = await supabase
        .from("creators")
        .select("*")
        .eq("id", uniqueIdentifier);

      if (creatorList && creatorList.data.length > 0) {
        setFormData(creatorList.data[0]);
      } else {
        console.log("No content");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateCreator = async () => {
    try {
      const { name, url, description, imageURL } = formData;
      const updateCreator = await supabase
        .from("creators")
        .update([{ name, url, description, imageURL }])
        .eq("id", uniqueIdentifier);
      console.log("RES", updateCreator);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCreator = async () => {
    try {
      const deleteCreator = await supabase
        .from("creators")
        .delete()
        .eq("id", uniqueIdentifier);
      console.log("RES", deleteCreator);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCreator(uniqueIdentifier);
  }, []);

  return (
    <div>
      <h1>Edit Content Creator</h1>
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
          <button type="button" onClick={updateCreator}>
            Update
          </button>
        </Link>
        <Link to="/">
          <button type="button" onClick={deleteCreator}>
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EditCreator;
