import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './NavigationMenu.css';

function Navigation() {
  return (
    <>
      <Header />
      <section className="a">
        <div className="b">
          <div className="c">
            <div className="t1">Total number of dives:</div>
            <div className="t2">20</div>
            <div className="t3">Dive time 7+ hours</div>
          </div>
          <div className="logbook-label">Log book</div>
          <Link href="/" id="log" className="log-menu">
            {' '}
            <img className="diary-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAC2UlEQVR4nO2cQW7UMBSGv0GoOzYs6cA92tI9vUOvUworFlwAJFh1CRJ7SoV6jc50EEhsOABl4VgNVmbsxM+OnbxPsmaSTp7tF/vFf+waFEVRFEVRFEXJyh7wGtgAd5WnW+C8qVM2XglXooT0UtRDHm6bTA9yZpqIQ+5bYjbsXZsKg+rzIEFBLFfAZUXHg0jpwL/8f0dLP7Zke6hMtQtne6hM1YGQ6aFSuwPdGOjWJ6h+KWNg6WyLgdmovQW6aAscgz4OXAIXwB+679QdsAZOPHZyyTIfIuPAUJbAb8IKvvLYKsWBl8DXjnJtO47iojH2Cdjv+PuqleGNx1bq2DnUfvu6o+b7RqpQttt2OQ9Mt11hnPfCY6t0B/YaSD8MNP6o+Vy0zl1jhgIHwBfgaWhJC+EKU/7jHJm9xdyRz5h4CDJdxT0nEe8kYqBVImJd+Ammew4J1i6lONBXLvFQ8wz4APxE3oGSFOtAX4apr5O2r1o4EhEtvPD/ZCs28742uq6LrUiXrdhyBdkZQ8rNkhRSLhUSMTBYiYS2wDfAY+7HgQsnrZ2C1MCuOZFvzfd3UpmplBMq1LJ17hr4HmErdRpaLkigRFJIubEdKDIODEVSypVC1veBICflSiW5A30Z1o5KuZ4UvzamdLLPC7tSrivVLOUGKZFQJKVcqQwaSM9ZymWdF5aUcqWQdU5EUsqVStJxoKSUKxWVcj3JOieyAZ4DH4FfgdeUjq4PFEal3BjM2YG7xoFHzecPn5E5z8plnRNRKReJ5ALLUkmqRKYo5UTGgTELLG3mx9S5wDLrOFClXCRTlHIuOivXk6wxEEwLPHUyqBnVwsJ0zYmst//c0KcFzoV2o3ifOqNdLXDsPRD6HruS9IyAf/lP2QLH3gNh6J4JMcueezHlGBhMzOssqxMPI2yUgn19lXXjnXPC3s7UlM5EPeRhD+NEuwVUzSn4oaEoiqIoiqIoigD/AMtuYDtxwfzLAAAAAElFTkSuQmCC" alt="diary" />
          </Link>
          <div className="history-label">History</div>
          <Link href="/" id="history" className="log-menu"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA0klEQVRIie3SP0oDQRzF8U8Eb5Ay2OUogiEJqW1yBdErBCGlJ8hJ8q8PsbU3dpbaWWyKnYXJIuwus0WKffBg3rD7nR8zj04NNcYXThi1AeyV8gmDaH0X1vfo12R+Y12Em5o/ZTW/q9RIPvknHtqCdmqkrqaVusqazrDHb/AO07bgS/n1ZTjgGOXXVPgsgmWYB8d7k/IjN6npcyn/Bcd6SanpCh94+wd8iycMr7qmO5f3/Rgc721ShpmqfuRxygHkVSxgR7xHeZEKLzTBFj/BG9HkZw+/Teny2WkuAAAAAElFTkSuQmCC" alt="list" /></Link>
        </div>
      </section>

    </>
  );
}

export default Navigation;
