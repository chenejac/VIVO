/* $This file is distributed under the terms of the license in LICENSE$ */
package edu.cornell.mannlib.vitro.webapp.visualization.valueobjects.json;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class MapOfScience {
    @JsonProperty
    private String uri;

    @JsonProperty
    private String label;

    @JsonProperty
    private String type;

    @JsonProperty
    private int pubsMapped;

    @JsonProperty
    private int pubsWithNoJournals;

    @JsonProperty
    private int pubsWithInvalidJournals;

    @JsonProperty
    private String lastCachedAtDateTime;

    @JsonProperty
    private Map<Integer, Float> subdisciplineActivity = new HashMap<Integer, Float>();

    @JsonProperty
    private Set<SubEntityInfo> subEntities = new HashSet<SubEntityInfo>();

    public MapOfScience(String uri) {
        this.uri = uri;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public int getPubsMapped() {
        return pubsMapped;
    }

    public void setPubsMapped(int pubsMapped) {
        this.pubsMapped = pubsMapped;
    }

    public int getPubsWithNoJournals() {
        return pubsWithNoJournals;
    }

    public void setPubsWithNoJournals(int pubsUnmapped) {
        this.pubsWithNoJournals = pubsUnmapped;
    }

    public int getPubsWithInvalidJournals() {
        return pubsWithInvalidJournals;
    }

    public void setPubsWithInvalidJournals(int pubsWithInvalidJournals) {
        this.pubsWithInvalidJournals = pubsWithInvalidJournals;
    }

    public Map<Integer, Float> getSubdisciplineActivity() {
        return subdisciplineActivity;
    }

    public void setSubdisciplineActivity(Map<Integer, Float> subdisciplineActivity) {
        this.subdisciplineActivity = subdisciplineActivity;
    }

    public String getLastCachedAtDateTime() {
        return lastCachedAtDateTime;
    }

    public void setLastCachedAtDateTime(String lastCachedAtDateTime) {
        this.lastCachedAtDateTime = lastCachedAtDateTime;
    }

    public void addSubEntity(String uri, String label, String type, int pubs) {
        this.subEntities.add(new SubEntityInfo(uri, label, type, pubs));
    }

    public Set<SubEntityInfo> getSubEntities() {
        return subEntities;
    }

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private class SubEntityInfo {
        @JsonProperty
        private String uri;

        @JsonProperty
        private String label;

        @JsonProperty
        private String type;

        @JsonProperty
        private int pubs;

        public SubEntityInfo(String uri, String label, String type, int pubs) {
            this.uri = uri;
            this.label = label;
            this.type = type;
            this.pubs = pubs;
        }

        public String getUri() {
            return uri;
        }

        public void setUri(String uri) {
            this.uri = uri;
        }

        public String getLabel() {
            return label;
        }

        public void setLabel(String label) {
            this.label = label;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public int getPubs() {
            return pubs;
        }

        public void setPubs(int pubs) {
            this.pubs = pubs;
        }
    }
}
