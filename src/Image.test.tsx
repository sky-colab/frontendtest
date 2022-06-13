import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Image from './Image';
import { act } from 'react-dom/test-utils';

let observer: any

beforeEach(() => {
    global.IntersectionObserver = class {
        constructor(f: any) {
            observer = f
        }
        observe() {
        }
        disconnect() {
        }
    } as any
})

test('Image loads grey rectangle + spinner to begin with', () => {
    render(<Image data-testid="image" />)

    expect(screen.queryByTitle("Wait..")).toBeInTheDocument()
    expect(screen.queryByTestId("image")).toBeNull()
});

test('Image loads when it comes into view', async () => {
    render(<Image data-testid="image" />)

    act(() => {
        observer([{ isIntersecting: true }])
    })
    
    await waitFor(() => {
        expect(screen.queryByTitle("Wait..")).toBeInTheDocument()
        expect(screen.queryByTestId("image")).toBeInTheDocument()
    })

    const image: any = screen.queryByTestId("image")
    expect(image).toBeInTheDocument()
    fireEvent.load(image)
    
    await waitFor(() => {
        expect(screen.queryByTitle("Wait..")).toBeNull()
        expect(screen.queryByTestId("image")).toBeInTheDocument()
    })
});
