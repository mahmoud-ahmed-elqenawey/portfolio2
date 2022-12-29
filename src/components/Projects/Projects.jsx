import React from "react";
import ProjectImage from "../../assets/project.png";
import "./Projects.scss";

const Projects = () => {
    return (
        <div className="projects">
            <div className="project">
                <div className="content">
                    <h3>Example Project</h3>
                    <p>
                        A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks, recently played
                        tracks, and detailed audio information about each track.
                        Create and save new playlists of recommended tracks
                        based on your existing playlists and more.
                    </p>
                </div>
                <img src={ProjectImage} alt="ProjectImage" />
            </div>
            <div className="project mt-5">
                <img src={ProjectImage} alt="ProjectImage" />
                <div className="content">
                    <h3>Example Project</h3>
                    <p>
                        A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks, recently played
                        tracks, and detailed audio information about each track.
                        Create and save new playlists of recommended tracks
                        based on your existing playlists and more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
