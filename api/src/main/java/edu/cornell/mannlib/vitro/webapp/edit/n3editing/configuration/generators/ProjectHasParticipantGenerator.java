/* $This file is distributed under the terms of the license in LICENSE$ */
package edu.cornell.mannlib.vitro.webapp.edit.n3editing.configuration.generators;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.jena.vocabulary.RDF;
import org.apache.jena.vocabulary.XSD;

import edu.cornell.mannlib.vitro.webapp.controller.VitroRequest;
import edu.cornell.mannlib.vitro.webapp.edit.n3editing.FirstAndLastNameValidator;
import edu.cornell.mannlib.vitro.webapp.edit.n3editing.VTwo.EditConfigurationVTwo;
import edu.cornell.mannlib.vitro.webapp.edit.n3editing.VTwo.fields.FieldVTwo;
import edu.cornell.mannlib.vitro.webapp.edit.n3editing.configuration.validators.AntiXssValidation;
import edu.cornell.mannlib.vitro.webapp.utils.FrontEndEditingUtils.EditMode;
import edu.cornell.mannlib.vitro.webapp.utils.generators.EditModeUtils;
import edu.cornell.mannlib.vitro.webapp.i18n.I18n;

public class ProjectHasParticipantGenerator  extends VivoBaseGenerator implements EditConfigurationGenerator{

    //TODO: can we get rid of the session and get it form the vreq?
    public EditConfigurationVTwo getEditConfiguration(VitroRequest vreq, HttpSession session) throws Exception {

        EditConfigurationVTwo conf = new EditConfigurationVTwo();

        initBasics(conf, vreq);
        initPropertyParameters(vreq, session, conf);
        initObjectPropForm(conf, vreq);

        conf.setTemplate("projectHasParticipant.ftl");

        conf.setVarNameForSubject("project");
        conf.setVarNameForPredicate("predicate");
        conf.setVarNameForObject("projectRole");

        conf.setN3Required( Arrays.asList( n3ForNewProjectRole ) );
        conf.setN3Optional(Arrays.asList(
            n3ForNewPerson,
            n3ForExistingPerson,
            firstNameAssertion,
            lastNameAssertion,
            n3ForNewVCardPerson,
            firstNameVCardAssertion,
            lastNameVCardAssertion
        ));

        conf.addNewResource("projectRole", DEFAULT_NS_FOR_NEW_RESOURCE);
        conf.addNewResource("newPerson",DEFAULT_NS_FOR_NEW_RESOURCE);
        conf.addNewResource("vcardPerson", DEFAULT_NS_FOR_NEW_RESOURCE);
        conf.addNewResource("vcardName", DEFAULT_NS_FOR_NEW_RESOURCE);

        //uris in scope: none
        //literals in scope: none

        conf.setUrisOnform(Arrays.asList("existingPerson", "createPersonInstance", "createVCard"));
        conf.setLiteralsOnForm( Arrays.asList("personLabel", "personLabelDisplay", "roleLabel",
                                              "roleLabeldisplay", "firstName", "lastName"));

        conf.addSparqlForExistingLiteral("personLabel", personLabelQuery);
        conf.addSparqlForExistingLiteral("roleLabel", roleLabelQuery);

        conf.addSparqlForExistingUris("existingPerson", existingPersonQuery);

        conf.addField( new FieldVTwo().
                setName("existingPerson")
                //options will be added in browser by auto complete JS
                );

        conf.addField( new FieldVTwo().
                setName("personLabel").
                setRangeDatatypeUri(RDF.dtLangString.getURI() ).
                setValidators( list("datatype:" + RDF.dtLangString.getURI())));

        conf.addField( new FieldVTwo().
                setName("roleLabel").
                setRangeDatatypeUri(RDF.dtLangString.getURI() ).
                setValidators( list("datatype:" + RDF.dtLangString.getURI(),"nonempty")));

        conf.addField( new FieldVTwo().
                setName("personLabelDisplay").
                setRangeDatatypeUri(XSD.xstring.toString() ));

        conf.addField( new FieldVTwo().
                setName("roleLabelDisplay").
                setRangeDatatypeUri(XSD.xstring.toString() ));

        conf.addField( new FieldVTwo().
                setName("firstName").
                setRangeDatatypeUri(RDF.dtLangString.getURI() ).
                setValidators( list("datatype:" + RDF.dtLangString.getURI()) )
                );

        conf.addField( new FieldVTwo().
                setName("lastName").
                setRangeDatatypeUri(RDF.dtLangString.getURI() ).
                setValidators( list("datatype:" + RDF.dtLangString.getURI()) )
                );

        conf.addField(new FieldVTwo().setName("createVCard"));
        conf.addField(new FieldVTwo().setName("createPersonInstance"));
            
        //Add validator
        conf.addValidator(new AntiXssValidation());
        conf.addValidator(new FirstAndLastNameValidator("existingPerson", I18n.bundle(vreq)));

        //Adding additional data, specifically edit mode
        addFormSpecificData(conf, vreq);
        prepare(vreq, conf);
        return conf;
    }

    private static final String vcardFailPattern = "@prefix fail_pattern: ?createVCard .\n";

    private static final String personInstanceFailPattern = "@prefix fail_pattern: ?createPersonInstance .\n";
    
    /* N3 assertions for working with educational training */

    private static final String n3ForNewProjectRole =
        "@prefix core: <"+ vivoCore +"> .\n" +
        "@prefix rdfs: <"+ rdfs +">  . \n"+
        "?project <http://purl.obolibrary.org/obo/BFO_0000055>  ?projectRole .\n" +
        "?projectRole  a <http://vivoweb.org/ontology/core#ResearcherRole> .\n" +
        "?projectRole <http://purl.obolibrary.org/obo/BFO_0000054> ?project . \n" +
        "?projectRole <"+ label +"> ?roleLabel . \n" ;

    private static final String n3ForNewPerson  =
        personInstanceFailPattern +
        "?projectRole <http://purl.obolibrary.org/obo/RO_0000052> ?newPerson . \n" +
        "?newPerson <http://purl.obolibrary.org/obo/RO_0000053> ?projectRole . \n" +
        "?newPerson a <http://xmlns.com/foaf/0.1/Person> . \n" +
        "?newPerson <"+ label +"> ?personLabel . ";

    private static final String n3ForExistingPerson  =
        "?projectRole <http://purl.obolibrary.org/obo/RO_0000052> ?existingPerson . \n" +
        "?existingPerson <http://purl.obolibrary.org/obo/RO_0000053> ?projectRole . \n" +
        " ";

    private static final String firstNameAssertion  =
        personInstanceFailPattern +
        "@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .  \n" +
        "?newPerson <http://purl.obolibrary.org/obo/ARG_2000028>  ?vcardPerson . \n" +
        "?vcardPerson <http://purl.obolibrary.org/obo/ARG_2000029>  ?newPerson . \n" +
        "?vcardPerson a <http://www.w3.org/2006/vcard/ns#Individual> . \n" +
        "?vcardPerson vcard:hasName  ?vcardName . \n" +
        "?vcardName a <http://www.w3.org/2006/vcard/ns#Name> . \n" +
        "?vcardName vcard:givenName ?firstName .";

    private static final String lastNameAssertion  =
        personInstanceFailPattern +
        "@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .  \n" +
        "?newPerson <http://purl.obolibrary.org/obo/ARG_2000028>  ?vcardPerson . \n" +
        "?vcardPerson <http://purl.obolibrary.org/obo/ARG_2000029>  ?newPerson . \n" +
        "?vcardPerson a <http://www.w3.org/2006/vcard/ns#Individual> . \n" +
        "?vcardPerson vcard:hasName  ?vcardName . \n" +
        "?vcardName a <http://www.w3.org/2006/vcard/ns#Name> . \n" +
        "?vcardName vcard:familyName ?lastName .";

    private static final String n3ForNewVCardPerson  =
        vcardFailPattern +
        "?projectRole <http://purl.obolibrary.org/obo/RO_0000052> ?vcardPerson . \n" +
        "?vcardPerson <http://purl.obolibrary.org/obo/RO_0000053> ?projectRole . \n" +
        "?vcardPerson a <http://www.w3.org/2006/vcard/ns#Individual> . \n" +
        "?vcardPerson <"+ label +"> ?personLabel . ";

    private static final String firstNameVCardAssertion  =
        vcardFailPattern +
        "@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .  \n" +
        "?vcardPerson a <http://www.w3.org/2006/vcard/ns#Individual> . \n" +
        "?vcardPerson vcard:hasName  ?vcardName . \n" +
        "?vcardName a <http://www.w3.org/2006/vcard/ns#Name> . \n" +
        "?vcardName vcard:givenName ?firstName .";

    private static final String lastNameVCardAssertion  =
        vcardFailPattern +
        "@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .  \n" +
        "?vcardPerson a <http://www.w3.org/2006/vcard/ns#Individual> . \n" +
        "?vcardPerson vcard:hasName  ?vcardName . \n" +
        "?vcardName a <http://www.w3.org/2006/vcard/ns#Name> . \n" +
        "?vcardName vcard:familyName ?lastName .";

    /* Queries for editing an existing educational training entry */

    private static final String roleLabelQuery =
        "SELECT ?roleLabel WHERE {\n"+
        "?projectRole <"+ label +"> ?roleLabel }\n";

    private static final String existingPersonQuery  =
        "PREFIX rdfs: <"+ rdfs +">   \n"+
        "SELECT ?existingPerson WHERE {\n"+
        "?projectRole <http://purl.obolibrary.org/obo/RO_0000052> ?existingPerson . \n" +
        "?existingPerson <http://purl.obolibrary.org/obo/RO_0000053> ?projectRole . \n" +
        " }";

    private static final String personLabelQuery  =
        "PREFIX rdfs: <"+ rdfs +">   \n"+
        "SELECT ?existingPersonLabel WHERE {\n"+
        "?projectRole <http://purl.obolibrary.org/obo/RO_0000052> ?existingPerson . \n" +
        "?existingPerson <http://purl.obolibrary.org/obo/RO_0000053> ?projectRole .\n"+
        "?existingPerson <"+ label +"> ?existingPersonLabel .\n"+
        " }";


  //Adding form specific data such as edit mode
    private void addFormSpecificData(EditConfigurationVTwo editConfiguration, VitroRequest vreq) {
        HashMap<String, Object> formSpecificData = new HashMap<String, Object>();
        formSpecificData.put("editMode", getEditMode(vreq).name().toLowerCase());
        editConfiguration.setFormSpecificData(formSpecificData);
    }

    private EditMode getEditMode(VitroRequest vreq) {
        List<String> predicates = new ArrayList<String>();
        predicates.add("http://purl.obolibrary.org/obo/RO_0000053");
        return EditModeUtils.getEditMode(vreq, predicates);
    }
}
