package com.example.demo.Bienimmobilier;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BienimmobilierRepository extends JpaRepository<Bienimmobilier, Integer> {

}
