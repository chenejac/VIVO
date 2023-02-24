/* $This file is distributed under the terms of the license in LICENSE$ */
package edu.cornell.mannlib.vitro.webapp.visualization.modelconstructor.factory;

import edu.cornell.mannlib.vitro.webapp.rdfservice.RDFService;
import edu.cornell.mannlib.vitro.webapp.visualization.exceptions.MalformedQueryParametersException;
import org.apache.jena.rdf.model.Model;

public interface ModelFactoryInterface {

    public Model getOrCreateModel(String uri, RDFService rdfService)
        throws MalformedQueryParametersException;
}
