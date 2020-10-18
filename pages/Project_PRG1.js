import React, {useState,useEffect} from 'react'
import * as d3 from 'd3'
import Layout from "../components/layout"
import Graph1 from "../components/Graph1"


export default function Project_PRG1() {

  return (
    <Layout title ="Working memory">

    <h3>What is working memory </h3>
    Working memory -- or short-term memory -- describes the brain's capacity to
    temporarily store a limited number of items. Its limited capacity sets it apart
    from stable long-term memory system. However, a computational models of working
    memory that is both finite and active is still missing.

    <h3>Representation of items in the brain </h3>

    One <a href="https://science.sciencemag.org/content/319/5869/1543">idea </a> is that working memory items are represented in the brain as recurrent population spikes.
    As the background activity increases, a neural network traverses different states.
    <Graph1
      width={400}
      height={400}
    />
    We find one transient state, in which the duration of the population spikes is finite.
    Is this a mechanism of forgetting?

    <h3>How stable are transient representations of working memory?</h3>
    For this, we study a firing rate model. This is a simplified set
    of equations, which does not capture spikes of single neurons, but models the
    firing rate of the population as a whole. We observe that:
    <ul>
    <li>
    noise can initiate a limit cycle from a regime without limit cycles
    <img src="/images/line.gif" alt="loading..." />
    </li>
    <li>
    Noise can disrupt a limit cycle from a regime with limit cycles
    </li>
    </ul>
    <h3> Might unregulated transient working memory durations underly psychiatric diseases?</h3>
    We incldue the effect of a genetic alteration which was linked to schizophrenia
    in our synaptic model. We show how this alteration shifts network activity to
    longer transients -- therefore suppressing the possibility to forget.

    <h3>And now?</h3>
    The computational model suggests that forgetting happens in a tuned regime
    of neural network activity. In psychiatric diseases, synaptic dysfunction could
    disrupt this regime. This hypothesis needs to be tested experimentally.

    <p>
    Check out the full paper on "Formation and synaptic control of active transient working memory representations" at <a href={"https://www.biorxiv.org/content/10.1101/2020.08.30.273995v1"}> BioRxiv </a>.
    </p>


    </Layout>
    )
}
