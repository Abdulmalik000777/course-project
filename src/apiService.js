import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get all templates
export const getTemplates = async () => {
  try {
    const response = await api.get("/templates");
    return response.data;
  } catch (error) {
    console.error("Error fetching templates:", error);
    throw error;
  }
};

// Create a new template
export const createTemplate = async (template) => {
  try {
    const response = await api.post("/templates", template);
    return response.data;
  } catch (error) {
    console.error("Error creating template:", error);
    throw error;
  }
};

// Update a template
export const updateTemplate = async (id, template) => {
  try {
    const response = await api.put(`/templates/${id}`, template);
    return response.data;
  } catch (error) {
    console.error("Error updating template:", error);
    throw error;
  }
};

// Delete a template
export const deleteTemplate = async (id) => {
  try {
    const response = await api.delete(`/templates/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting template:", error);
    throw error;
  }
};

export default api;
