# Front end testing example

This repository demonstrates how different parts of a React app can be tested.
It is based on [create-react-app],
and implements a `Collapsible` box component.
To ease testing the pure view and logic parts are split
into a `CollapsibleView` and `CollapsibleController` component respectively.

## Logic testing

The logic part is tested using "classical" unit testing
with the [Jest] test runner.

## View component testing

The `CollapsibleView` component has a button that should invoke a callback.
This also uses a unit test with a mock.

However,
to test the visual appearance,
[Storybook] and [Chromatic] are used.
For each relevant display state,
a story is defined in the Storybook.
Chromatic will screenshot the rendering of each story,
and does a visual regression test on them.
Any change needs to be accepted via the web UI.
Testing the visual appearance has the advantage
of being independent of the concrete implemantation.
For example,
it does not matter
whether elements in the collapsed state are hidden
with `height: 0` or `max-height: 0`.

You can view
[the repository's Chromatic page](https://chromatic.com/library?appId=61f3c3b7fdae5e003ab73c69&branch=main)
and [the repository's Storybook](https://main--61f3c3b7fdae5e003ab73c69.chromatic.com/).

Not everything shows in the screenshot, though.
For example,
title texts are not covered this way.
Testing them with a unit test is cumbersome
because each change requires an equivalent change in the unit test.
The [Storyshots] addon for storybook gives snapshot tests for the Storybook stories
without additional work.
This allows to detect unwanted changes in the markup,
but also makes it quick to accept changes.

## Integration

The integration of the controller and view is tested with Jest.
It is similar to the `CollabsibleController` test.
For simple components like `Collapsible` it might suffice
to have just one of these tests.

Another Storybook story is provided for the integration
of the `CollapsibleView` and `CollapsibleController`.
As visual testing is done already for the view `CollapsibleView`,
Chromatic has been disabled in this test.
However,
one could use [Storybook interactions]
to test the integrated component.

# License

frontend-testing is open source software licensed as MIT.

The React logo (Meta Platforms, Inc.) is licensed under a Creative Commons Attribution 4.0 International license.

[chromatic]: https://www.chromatic.com/
[create-react-app]: https://create-react-app.dev/
[jest]: https://jestjs.io/
[storybook]: https://storybook.js.org/
[storybook interactions]: https://storybook.js.org/docs/react/essentials/interactions
[storyshots]: https://www.npmjs.com/package/@storybook/addon-storyshots
