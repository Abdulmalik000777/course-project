import React, { useState, useEffect } from "react";
import axios from "axios";
import ExampleCard from "../components/ExampleCard";

const Dashboard = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await axios.get("/api/templates");
        setTemplates(res.data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="d-flex flex-wrap">
        {templates.map((template) => (
          <ExampleCard
            key={template.id}
            title={template.title}
            text={template.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
