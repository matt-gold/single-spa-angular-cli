
# single-spa-angular-cli

Single-spa starter project in an Angular CLI container application.
  

## Description
Updated for Angular 9!
  
  

## Considerations
Before committing a micro-frontend architecture, consider the following:
- Do you have the necessary infrastructure to share code across your apps? One way to achieve this while staying DRY is to publish shared code as npm packages in an npm registry internal to your organization. Another option - you could use a [monorepo](https://nx.dev/angular).
- Do you have a component library? Your applications will likely need to look and feel the same. A [design system](https://www.invisionapp.com/inside-design/guide-to-design-systems/) makes this much easier, if your organization does not have one of it's own consider using Google's material or creating a shared component library with something like [Storybook](https://storybook.js.org/).
- Do you have a mature CI/CD pipeline? Micro-frontends can make releases faster and less risky, and give dev teams full autonomy of the SDLC of smaller sections of a large application. However, each micro-app needs to be built and deployed independently, so make sure the overhead of setting up new CI/CD pipelines for each app is taken into account.

## Disclaimer
The authors of single-spa discourage the parent app approach implemented here because it could lead to tight coupling between the parent and child applications _if you're not careful_, and also because it does extra work to manage application life-cycles that single-spa already does for you. 
  
  The key difference is that the container app in this repository manages the lifecycles of the single-spa-angular micro-apps manually using Angular's router (by making use of single-spa ["parcels"]([https://single-spa.js.org/docs/parcels-overview/](https://single-spa.js.org/docs/parcels-overview/))), rather than letting single-spa control the application life-cycles and routing (by registering the single-spa-angular micro-apps as single-spa ["applications"](https://single-spa.js.org/docs/building-applications)).

 Reasons you may prefer the approach implemented here:
- You are incrementally adding or experimenting with micro-frontends in a large Angular application, and are not necessarily ready to run everything with single-spa.
- You're an all-Angular shop and want to keep everything within the Angular CLI platform (maybe to reduce the mental overhead for your developers). This approach encapsulates single-spa away, making it more of an implementation detail.
- You are migrating an existing Angular application to a micro-frontend:
	- Whose app-to-app hand-off is complex and simply needs more control than single-spa's activity function provides.
	- Which has already adopted a parent-child concept and lends itself to this structure.

  

### Other resources

This example was originally created as part of this presentation: [youtube link](https://www.youtube.com/watch?v=GALSD2U7HOI&feature=youtu.be)

  
  

Here are the associated slides: [slides](https://docs.google.com/presentation/d/18zoaEm3PqQ6DgbcJNYh_Ho6EnO75AnRw5PKz3HlXI7Y/edit?usp=sharing)