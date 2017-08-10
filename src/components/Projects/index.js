import React, {Component} from 'react';
import '../../stylesheets/projects.css';
import Masonry from 'react-masonry-layout';

class Projects extends Component {
    getItems() {
        return null;
    }

    render() {

        return (
            <div className="container">
                <div className="project-header">
                    Projects
                </div>
                <div className="project-title">
                    Here are some projects I've done in my free time.
                </div>

                <div className="project-subtext">
                </div>

                <Masonry id="tile-container"
                         className="tile-container"
                         packed="packed"
                         infiniteScroll={this.getItems}
                         sizes={[{columns: 1, gutter: 20},
                                {mq: '768px', columns: 2, gutter: 20},
                                {mq: '1024px', columns: 3, gutter: 20}]}>
                    <div key="1" className="test">
                        Bar top arcade and emulator
                    </div>
                    <div key="2" className="test">
                        Smart water dispenser
                    </div>
                    <div key="4" className="test">
                        Smart desk
                    </div>
                    <div key="5" className="test">
                        Smart wall
                    </div>
                    <div key="6" className="test">
                        Bar top arcade and emulator
                    </div>
                    <div key="7" className="test">
                        Smart water dispenser
                    </div>

                </Masonry>
            </div>
        )
    }
}

export default Projects;