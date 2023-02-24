/* $This file is distributed under the terms of the license in LICENSE$ */

package edu.cornell.mannlib.vitro.webapp.visualization.visutils;

import edu.cornell.mannlib.vitro.webapp.visualization.exceptions.MalformedQueryParametersException;
import org.apache.jena.rdf.model.Model;

public interface ModelConstructor {

    Model getConstructedModel() throws MalformedQueryParametersException;

}
