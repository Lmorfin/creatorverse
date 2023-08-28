/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function ShowCreators() {
  const [creators, SetCreators] = useState([]);

  const getCreators = async () => {
    try {
      const creatorList = await supabase.from("creators").select("*");
      if (creatorList.data.length == 0) {
        console.log("No content");
      } else {
        console.log(creatorList.data);
        SetCreators(creatorList.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCreators();
  }, []);

  return (
    <div>
      {creators.map((item) => (
        <Link key={item.id} to={`/view-creator/${item.id}`}>
          <div className="card-container">
            <Card
              name={item.name}
              url={item.url}
              desc={item.description}
              img={item.imageURL}
              link={item.id}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ShowCreators;
