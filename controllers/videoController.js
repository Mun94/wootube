import routes from '../routes.js';
import Video from '../models/Video.js';

export const home = async(req, res) => {
  try{
    const videos = await Video.find({});
    res.render("home", {pageTitle : "Home", videos});
  }catch(e){
    res.render("home", {pageTitle : "Home", videos : []});
  }
}
export const search = (req, res) => {
    const {query : {term : searchingBy}} = req;
    return res.render("search", { pageTitle: "Search", searchingBy, videos})
};
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async(req, res) => {
  const {
    body : { title, description },
    file : { path }
  } = req;

  console.log('path', req.file.path);
  const newVideo = await Video.create({
    fileUrl : path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetail = async (req, res) => {
  const {
    params : {id}
  } = req;
  try{
    const video = await Video.findById(id);
    res.render("videoDetail", {pageTitle : "Video Detail", video});
    console.log("id", id);
    console.log("video id", video);
  }catch(e){
    res.redirect(routes.home);
  }
}

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });