//import React from 'react'; //, { useEffect, useState }
//import '../styles/index.css';
import Layout from "../components/layout"

function Index() {
  return (
    <Layout title ="Contact line dynamics">

    <p>
    Check out the full Thesis "From the nano- to the macroscale – bridging scales for the moving contact line problem" <a href="https://spiral.imperial.ac.uk/handle/10044/1/34933"> here </a>.
    </p>
    <p>The moving contact line problem is one of the main unsolved fundamental problems in fluid mechanics, with relevant physical phenomena spanning multiple scales, from the molecular to the macroscopic scale.
      In this thesis, at the macroscale, it is shown that classical asymptotic analysis is applicable at the moving contact line. This allows for a direct matching procedure between the inner (nanoscale) region and the outer (macroscale) region, therefore simplifying the analysis presented to date in the literature.
      At the mesoscale, a unified derivation for single and binary fluid diffuse interface models is presented, consolidating two models present in the literature. Results from an asymptotic analysis of the sharp interface limit of the binary fluid diffuse interface model are compared with numerical computations of the inner region in the vicinity of a moving contact line.
      Finally, the nanoscale structure of the density profile in the vicinity of the con- tact line is studied using density functional theory (DFT). At equilibrium, an effective disjoining pressure is extracted and results are compared with coarse-grained Hamiltonian theory. A derivation of Navier-Stokes like dynamic DFT equations is presented. Results for the moving contact line are compared with predictions from molecular kinetic theory.
      Computations for both DFT and diffuse interface approaches are performed using pseudospectral methods mapped to unbounded domains. The numerical scheme is presented, and the inclusion of hard-sphere effects via a fundamental measure theory is discussed.</p>
    </Layout>
  );
}

export default Index;


/*import React from 'react'; //, { useEffect, useState }
import '../../styles/index.css';
import Layout from "../../components/layout"

function Index() {
  return (
    <Layout title = "Contact line dynamics">
    <h3 class="menu-category-name">From the nano- to the macroscale – bridging scales for the moving contact line problem.</h3>
    <a href="https://spiral.imperial.ac.uk/handle/10044/1/34933"> Thesis </a>
    <p>The moving contact line problem is one of the main unsolved fundamental problems in fluid mechanics, with relevant physical phenomena spanning multiple scales, from the molecular to the macroscopic scale.
      In this thesis, at the macroscale, it is shown that classical asymptotic analysis is applicable at the moving contact line. This allows for a direct matching procedure between the inner (nanoscale) region and the outer (macroscale) region, therefore simplifying the analysis presented to date in the literature.
      At the mesoscale, a unified derivation for single and binary fluid diffuse interface models is presented, consolidating two models present in the literature. Results from an asymptotic analysis of the sharp interface limit of the binary fluid diffuse interface model are compared with numerical computations of the inner region in the vicinity of a moving contact line.
      Finally, the nanoscale structure of the density profile in the vicinity of the con- tact line is studied using density functional theory (DFT). At equilibrium, an effective disjoining pressure is extracted and results are compared with coarse-grained Hamiltonian theory. A derivation of Navier-Stokes like dynamic DFT equations is presented. Results for the moving contact line are compared with predictions from molecular kinetic theory.
      Computations for both DFT and diffuse interface approaches are performed using pseudospectral methods mapped to unbounded domains. The numerical scheme is presented, and the inclusion of hard-sphere effects via a fundamental measure theory is discussed.</p>
    </Layout>
  );
}
*/
