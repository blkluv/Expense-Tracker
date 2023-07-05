import { useContext, useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Overview from "../components/overview/Overview";
import PerformanceGraph from "../components/performance/PerformanceGraph";
import Performers from "../components/top-performers/Performers";
import Transactions from "../components/transactions/Transactions";
import { useMoralis } from "react-moralis";
import Login from "../components/common/Login";
import dataContext from "../context/DataContext/dataContext";

export default function HomePage() {
  const [showButton, setShowButton] = useState(false);
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const { updateUI, transactions } = useContext(dataContext);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else if (window.scrollY === 0) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []); // Add an empty dependency array to run the effect only once on component mount

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
    }
  }, [isWeb3Enabled]);

  if (!isWeb3Enabled) return <Login />;
  return (
    <div style={{ backgroundColor: "rgba(232, 249, 252, 0.76)" }}>
      <div className="hero-section">
        <div className="overlay">
          <h1>Welcome to Your App</h1>
          <p>Connect with MetaMask to get started</p>
          <Button variant="primary">Connect to MetaMask</Button>
        </div>
        <img src="hero-image.jpg" alt="Hero Image" />
      </div>

      <Container className="mt-5 py-3 bg-white">
        <Overview />
        {transactions.length > 0 && (
          <div>
            <Transactions />
            <PerformanceGraph />
            <Performers />
          </div>
        )}

        <div className="section">
          <Row>
            <Col md={6}>
              <img src="section1-image.jpg" alt="Section 1" />
            </Col>
            <Col md={6}>
              <h2>Section 1 Title</h2>
              <p>Section 1 Description</p>
            </Col>
          </Row>
        </div>

        <div className="section">
          <Row>
            <Col md={6}>
              <h2>Section 2 Title</h2>
              <p>Section 2 Description</p>
            </Col>
            <Col md={6}>
              <img src="section2-image.jpg" alt="Section 2" />
            </Col>
          </Row>
        </div>

        <div className="section">
          <Row>
            <Col md={6}>
              <img src="section3-image.jpg" alt="Section 3" />
            </Col>
            <Col md={6}>
              <h2>Section 3 Title</h2>
              <p>Section 3 Description</p>
            </Col>
          </Row>
        </div>

        <div className="section">
          <Row>
            <Col md={6}>
              <h2>Section 4 Title</h2>
              <p>Section 4 Description</p>
            </Col>
            <Col md={6}>
              <img src="section4-image.jpg" alt="Section 4" />
            </Col>
          </Row>
        </div>
      </Container>

      <button
        className="btn"
        style={{
          backgroundColor: "purple",
          color: "white",
          width: "50px",
          height: "50px",
          position: "fixed",
          right: 10,
          bottom: 10,
          zIndex: 100,
          borderRadius: "30px",
        }}
        onClick={scrollToTop}
        hidden={!showButton}
      >
        ^
      </button>
    </div>
  );
}
