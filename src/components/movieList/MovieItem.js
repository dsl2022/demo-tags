import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTag, getTag } from "../../features/tags/tagsSlice";
import "../../../src/App.css";
export default function MovieItem({ movie }) {
  const [tag, setTag] = useState("");
  const tagState = useSelector(getTag);
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    if (tagState.tags[movie.id.toString()])
      setTagList(tagState.tags[movie.id.toString()]);
  }, [tagList]);
  const dispatch = useDispatch();
  function handleTag(e) {
    setTag(e.target.value);
  }
  function handleAddTag(e) {
    if (tagList.length < 5) {
      setTagList([...tagList, tag]);
      dispatch(
        updateTag({ id: movie.id.toString(), tagNames: [...tagList, tag] })
      );
    }
    setTag("");
  }

  function handleRemoveTag(e) {
    const tagListFilter = tagList.filter((tag) => {
      return tag != e?.target?.name;
    });
    setTagList([...tagList, tagListFilter]);
    dispatch(updateTag({ id: movie.id.toString(), tagNames: tagListFilter }));
  }

  function TagsGenerator() {
    return tagList.map((tag, index) => (
      <button key={index} onClick={handleRemoveTag} name={tag}>
        {tag}
      </button>
    ));
  }

  return (
    <li key={movie.id}>
      <div className="item-list">
        <span>{movie.name}</span>
        <div>
          <TagsGenerator />
        </div>
        <div className="input-container">
          <input
            className="tag-input"
            onChange={handleTag}
            value={tag}
            type="text"
            placeholder="enter tag"
          />
        </div>
        <div className="button-container">
          <button
            className="add-tag-button"
            name={movie.id}
            onClick={handleAddTag}
          >
            Add Tag
          </button>
        </div>
      </div>
    </li>
  );
}
