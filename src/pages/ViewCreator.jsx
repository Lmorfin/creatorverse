import { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

function ViewCreator() {

    const [creator, SetCreator] = useState([]);

    const getCreator = async (uniqueIdentifier) => {
      const creatorList = await supabase.from("creators").select("*").eq("id", uniqueIdentifier);
      console.log(creatorList);

      if (creatorList.data.length == 0) {
        console.log("No content");
      } else {
        SetCreator(creatorList.data);
      }
    };

  useEffect(() => {
    const currentURL = window.location.href;
    const splitURL = currentURL.split("/view-creator/");
    const uniqueIdentifier = splitURL[1];

    getCreator(uniqueIdentifier);

  }, []);

  return (
    <div>
        {creator.map((item) => (

          <div key={item.id}>
            <div className="card-container">
              <Card
                name={item.name}
                url={item.url}
                desc={item.description}
                img={item.imageURL}
                link={item.id}
              />

            </div>
          </div>
      ))}
    </div>
  )
}

export default ViewCreator