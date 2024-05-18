package com.example.demo.Bienimmobilier;

import jakarta.persistence.*;

@Entity
@Table(name = "Bienimmobilier")
public class Bienimmobilier {
    @Id
    @SequenceGenerator(
            name = "bienimmobilier_sequence",
            sequenceName = "bienimmobilier_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "bienimmobilier_sequence"
    )
    @Column(name = "id",
            updatable = false
    )
    private int id;
    @Column(name = "taille")
    private double taille;
    @Column(name = "prix")
    private double prix;
    @Column(name = "commune",
            columnDefinition = "TEXT")
    private String commune;
    @Column(name = "ville")
    private String ville;
    @Column(name = "description")
    private String description;
    private Bienetat etat;
    @Column(name = "type")
    private Bienimmobiliertype type;
    private Bientypechambre typechambre;
    private int etage;
    public Bienimmobilier(double taille, double prix, String commune, String ville, String description, Bienetat etat, Bienimmobiliertype type,Bientypechambre typechambre,int etage) {
        this.taille = taille;
        this.prix = prix;
        this.commune = commune;
        this.ville = ville;
        this.description = description;
        this.etat = etat;
        this.type = type;
        this.etage = etage;
        this.typechambre = typechambre;
    }
    public Bienimmobilier() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getTaille() {
        return taille;
    }

    public void setTaille(double taille) {
        this.taille = taille;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public String getCommune() {
        return commune;
    }

    public void setCommune(String commune) {
        this.commune = commune;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Bienetat getEtat() {
        return etat;
    }

    public void setEtat(Bienetat etat) {
        this.etat = etat;
    }

    public Bienimmobiliertype getType() {
        return type;
    }

    public void setType(Bienimmobiliertype type) {
        this.type = type;
    }

    public Bientypechambre getTypechambre() {
        return typechambre;
    }

    public void setTypechambre(Bientypechambre typechambre) {
        this.typechambre = typechambre;
    }

    public int getEtage() {
        return etage;
    }

    public void setEtage(int etage) {
        this.etage = etage;
    }

    @Override
    public String toString() {
        return "Bienimmobilier{" +
                "id=" + id +
                ", taille=" + taille +
                ", prix=" + prix +
                ", commune='" + commune + '\'' +
                ", ville='" + ville + '\'' +
                ", description='" + description + '\'' +
                ", etat=" + etat +
                ", type=" + type +
                ", typechambre=" + typechambre +
                ", etage=" + etage +
                '}';
    }
}
