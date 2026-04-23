import "./PostForm.css"

const PostForm = ({
  onSubmit,
  author,
  setAuthor,
  title,
  setTitle,
  description,
  setDescription,
  image,
  setImage,
  submitBtnValue,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Digite o autor"
          onChange={(e) => setAuthor(e.target.value)}
          value={author || ""}
        />
      </div>

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
        <label htmlFor="description">Conteúdo:</label>
        <textarea
          name="description"
          id="description"
          placeholder="Digite o conteúdo"
          onChange={(e) => setDescription(e.target.value)}
          value={description || ""}
        ></textarea>
      </div>

      <div className="form-control">
        <label htmlFor="image">Imagem:</label>
        <input
          type="text"
          name="image"
          id="image"
          placeholder="Digite o link da imagem"
          onChange={(e) => setImage(e.target.value)}
          value={image || ""}
        />
      </div>
      <input type="submit" value={submitBtnValue} className="btn" />
    </form>
  );
};

export default PostForm;
