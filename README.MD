Welcome to React DataGrid

The MOST Powerful DataGrid/TreeGrid component for React based Line Of Business Applications

Print, Word/Excel Export, Server/Client Paging and Filtering, Customizable Filter Controls and Summary Footers, User Settings, Preference Persistence

Smooth scroll, Nested Hierarchical Tree/child grids, Left/Right Locked Columns, Lazy Load/Virtual Scroll

This is the styles package with the base adapter for the Flexicious React DataGrid

This package includes the following external pieces that customers usually want to customize:

1) Modal Popups [Settings, Persistence, Export, Print] all have popup windows that customers often want to customize.
2) Date Pickers
3) Styles and themes

Customers usually request that the grid use their own popup dialogs and date pickers since there is a lot of custom styling that 
goes into these components. Since these usually come with dependencies on external libraries, the adapter code is separated out into
its own npm package so that the core library package does not carry unnecessary modules if they are not being used. 

We have the following adapters available:
1) Basic
2) Material UI
3) Bootstrap [Coming soon]

This package is for the basic adapter.