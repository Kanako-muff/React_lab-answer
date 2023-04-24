import React from 'react'
import { Component } from 'react'

export class Lab2ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('Logging', error, errorInfo);
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h2>Something went wrong.</h2>;
        }
        return this.props.children; 
    }
}