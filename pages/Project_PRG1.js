import React, {useState,useEffect} from 'react'
import * as d3 from 'd3'
import Layout from "../components/layout"
import Graph1 from "../components/Graph1"


export default function Project_PRG1() {

  return (
    <Layout title ="PRG1 working memory">
    <p>
    Check out the full paper on "Formation and synaptic control of active transient working memory representations" at <a href={"https://www.biorxiv.org/content/10.1101/2020.08.30.273995v1"}> BioRxiv </a>.
    </p>
    <p>Neural representations of working memory maintain information temporarily and make it accessible for processing. This is most feasible in active, spiking representations. State-of-the-art modeling frameworks, however, reproduce working memory representations that are either transient but non-active or active but non-transient. Here, we analyze a biologically motivated working memory model which shows that synaptic short-term plasticity and noise emerging from spiking networks can jointly produce a working memory representation that is both active and transient. We investigate the effect of a synaptic signaling mechanism whose dysregulation is related to schizophrenia and show how it controls transient working memory duration through presynaptic, astrocytic and postsynaptic elements. Our findings shed light on the computational capabilities of healthy working memory function and offer a possible mechanistic explanation for how molecular alterations observed in psychiatric //diseases such as schizophrenia can lead to working memory impairments.</p>
    <Graph1
      width={400}
      height={400}
    />
    </Layout>
    )
}
