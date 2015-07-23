import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';


import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const startPosition = [51.505, -0.09]; 

class Body extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = { myPosition: this.props.initialPosition} ;
  }

  updateCurrentPosition(updatedPosition) {
      this.setState({ myPosition: updatedPosition });
  }
  componentDidMount() {
    this.setState( { myPosition: this.props.initialPosition} );
    ReactBootstrap.Dispatcher.on('Body:updateCurrentPosition', this.updateCurrentPosition.bind(this));
  }
  componentWillUnmount() {
    ReactBootstrap.Dispatcher.off('Body:updateCurrentPosition', this.updateCurrentPosition.bind(this));
  }

  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody className='text-center'> 
                    <Map style={{position: "none", height: "400px"}} center={this.state.myPosition} zoom={13}>
                      <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                      <Marker position={startPosition}>
                        <Popup>
                          <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                        </Popup>
                      </Marker>
                    </Map>     
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
  

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body initialPosition={startPosition}/>
        <Footer />
      </Container>
    );
  }
}
