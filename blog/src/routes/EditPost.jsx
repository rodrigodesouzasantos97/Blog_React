import blogFetch from "../axios/config";

import { useState, useEffect, useId } from "react";

import { useNavigate, useParams } from "react-router-dom";

import "./EditPost.css";

const EditPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      const data = response.data;

      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const edit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      body,
      useId: 1,
    };

    await blogFetch.put(`/posts/${id}`, {
      body: post,
    });
  };

  return (
    <div className="edit-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={edit}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
          ></textarea>
        </div>
        <input type="submit" value="Editar" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;
