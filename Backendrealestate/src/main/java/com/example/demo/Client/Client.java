package com.example.demo.Client;

import jakarta.persistence.*;

@Entity
@Table(name = "Client",
        uniqueConstraints = {
                @UniqueConstraint(name = "client_email_unique", columnNames = "email")
        })
public class Client {
    @Id
    @SequenceGenerator(
            name = "client_sequence",
            sequenceName = "client_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "client_sequence"
    )
    @Column(name = "id",
            updatable = false)
    private Integer id;
    @Column(name = "nom",
            columnDefinition = "TEXT")
    private String nom;
    @Column(name = "type")
    private ClientType type;
    @Column(name = "adresse",
            columnDefinition = "TEXT")
    private String adresse;
    @Column(name = "email",
            columnDefinition = "TEXT")
    private String email;
    @Column(name = "telephone",
            columnDefinition = "TEXT")
    private String telephone;
    public Client() {}

    public Client(String nom, ClientType type, String adresse, String email, String telephone) {
        this.nom = nom;
        this.type = type;
        this.adresse = adresse;
        this.email = email;
        this.telephone = telephone;
    }

    public Integer getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public ClientType getType() {
        return type;
    }

    public void setType(ClientType type) {
        this.type = type;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", type=" + type +
                ", adresse='" + adresse + '\'' +
                ", email='" + email + '\'' +
                ", telephone='" + telephone + '\'' +
                '}';
    }
}
