# AC Frontend Test

## Getting started

First, fork this repository into your own Github account, then clone locally.

Install the modules:

    npm install

Start the app, which will open the app at [http://localhost:3000/](http://localhost:3000/):

    npm start

The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is written in React + Typescript, using the [Emotion](https://emotion.sh/docs/introduction) library for styling.

## The task

Upon opening the address at [http://localhost:3000/](http://localhost:3000/) you will see a simple gallery of images from NASA. As you can see, the images are quite big.

The task is to turn this into a lazy-loading image gallery.

Open the file `App.tsx`. You'll see it uses an `Image` component located inside `Image.tsx` to display the images. At the moment, `Image` merely is a proxy for the native HTML `<img>` tag.

### Part 1

Update the `Image` component so that it does not initially load the image source, but instead displays a blank grey rectangle of some arbitrary height. As the user scrolls down the page so the component becomes displayed, the `Image` component should update and load the desired image. If the component is in view on the initial page load however, it should display the image automatically straight away.

Do **not** use any third-party library for this. There must be no additional packages installed to enable this functionality.

### Part 2

Upadate the interface `ImageProps` to be:

    interface ImageProps extends ImgElementProps {
      threshold?: number;
      loadingIcon?: React.ReactNode;
    }

Update the `Image` component so that it can take the optional props `threshold` and `loadingIcon`.

`threshold` is a number between 0 and 1 reflecting how much of the component should be visible before loading. `0` means just one pixel visible in the window will trigger a load. `1` means the entire component will need to be visible before loading. The default value, if none given, is up to you.

`loadingIcon` is a React component that will render a loading icon while the image is loading. It should be centered both horizontally and vertically within the rectangle. To start you off there is a `Spinner.tsx` component which should be the default if none provided, but it will need animating.

### Part 3

At the moment it's a bit jarring when the image suddenly loads. Update your `Image` component so the image fades in once it is loaded.

Once all this is done, with a threshold value of `0.9`, the gallery should look something like this:

![](/images/demo.gif)

### Part 4

Write some tests for the `Image` component's lazy loading behaviour in `Image.test.tsx`. Jest is already installed as part of [Create React App](https://create-react-app.dev/docs/running-tests/). You may add additional testing libraries or packages for this part of the test, if you wish.

The suggested test functions are intended as a guide, feel free to add more or edit them. Aim for coverage of all the most likely scenarios, but 100% coverage is not mandatory if you feel it is not necessary.

### Part 5 (optional)

Only do this bit if you have the time or inclination. Split out your code and turn it into a React Hook that any component can used to perform some user-specified callback function when it is scrolled into view.

## Once you are done

Commit all your changes to your forked repo on Github. Do not initiate a Pull Request or else other candidates will see your answer. Email the URL of the forked repo back to us for assessment. Thank you.
