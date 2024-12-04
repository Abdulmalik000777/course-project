import React, { useState, useEffect } from "react";
import { getTemplates, deleteTemplate } from "./apiService";
import ExampleCard from "./components/ExampleCard";

const Dashboard = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await getTemplates();
        setTemplates(data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTemplate(id);
      setTemplates(templates.filter((template) => template.id !== id));
    } catch (error) {
      console.error("Error deleting template:", error);
    }
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="d-flex flex-wrap">
        {templates.map((template) => (
          <ExampleCard
            key={template.id}
            title={template.title}
            text={template.description}
            onDelete={() => handleDelete(template.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
