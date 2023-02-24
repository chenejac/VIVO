/* $This file is distributed under the terms of the license in LICENSE$ */

package org.vivoweb.reasoner.plugin;

import edu.cornell.mannlib.vitro.webapp.reasoner.ReasonerPlugin;
import edu.cornell.mannlib.vitro.webapp.reasoner.plugin.SimplePropertyAndTypeRule;
import org.apache.jena.vocabulary.RDFS;

public class DCTitleForDocuments extends SimplePropertyAndTypeRule implements ReasonerPlugin {

    public DCTitleForDocuments() {
        super(RDFS.label.getURI(),
            "http://purl.org/ontology/bibo/Document",
            "http://purl.org/dc/terms/title");
    }

}
