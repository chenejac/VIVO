/* $This file is distributed under the terms of the license in LICENSE$ */

package edu.cornell.mannlib.vitro.webapp.edit.n3editing.configuration.generators;

import javax.servlet.http.HttpSession;
import java.util.Arrays;

import edu.cornell.mannlib.vitro.webapp.controller.VitroRequest;
import edu.cornell.mannlib.vitro.webapp.edit.n3editing.VTwo.EditConfigurationVTwo;
import edu.cornell.mannlib.vitro.webapp.edit.n3editing.VTwo.fields.FieldVTwo;
import edu.cornell.mannlib.vitro.webapp.edit.n3editing.configuration.validators.AntiXssValidation;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class AddOrcidIdToPersonGenerator extends VivoBaseGenerator implements
    EditConfigurationGenerator {
    final static String n3ForOrcidId =
        "@prefix owl: <http://www.w3.org/2002/07/owl#> .\n" +
            "?person <http://vivoweb.org/ontology/core#orcidId> ?orcidId . \n" +
            "?orcidId a owl:Thing . ";
    final static String orcidIdQuery =
        "SELECT ?existingOrcidId WHERE { \n" +
            "?person <http://vivoweb.org/ontology/core#orcidId> ?existingOrcidId . \n" +
            "}";

    /* N3 assertions  */
    private Log log = LogFactory.getLog(AddOrcidIdToPersonGenerator.class);

    /* Queries for editing an existing entry */

    @Override
    public EditConfigurationVTwo getEditConfiguration(VitroRequest vreq,
                                                      HttpSession session) throws Exception {

        EditConfigurationVTwo conf = new EditConfigurationVTwo();

        initBasics(conf, vreq);
        initPropertyParameters(vreq, session, conf);
        initObjectPropForm(conf, vreq);

        conf.setTemplate("addOrcidIdToPerson.ftl");

        conf.setVarNameForSubject("person");
        conf.setVarNameForPredicate("predicate");
        conf.setVarNameForObject("orcidId");

        conf.setN3Required(Arrays.asList(n3ForOrcidId));

        conf.setUrisOnform(Arrays.asList("orcidId"));

        conf.addSparqlForExistingUris("orcidId", orcidIdQuery);

        conf.addField(new FieldVTwo().
            setName("orcidId").
            setValidators(list("nonempty")));

        conf.addValidator(new AntiXssValidation());

        prepare(vreq, conf);
        return conf;
    }

}
